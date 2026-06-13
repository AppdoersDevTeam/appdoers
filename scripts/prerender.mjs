/**
 * Full browser prerender (local/CI only). Vercel builds use prerender-static.mjs instead.
 */
import { chromium } from 'playwright';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prerenderRoutes } from './prerender-routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
};

function resolveDistFile(urlPath) {
  const safePath = urlPath.split('?')[0].split('#')[0];
  const relative = safePath === '/' ? 'index.html' : safePath.replace(/^\//, '');
  let filePath = path.join(dist, relative);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(dist, 'index.html');
  }

  return filePath;
}

function startStaticServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const filePath = resolveDistFile(decodeURIComponent(req.url || '/'));
      fs.readFile(filePath, (error, data) => {
        if (error) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
        res.end(data);
      });
    });

    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') {
        reject(new Error('Failed to bind static server'));
        return;
      }
      resolve({
        server,
        baseUrl: `http://127.0.0.1:${address.port}`,
      });
    });
  });
}

async function scrollPage(page) {
  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const max = document.documentElement.scrollHeight;
    const step = Math.max(window.innerHeight, 400);
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await wait(50);
    }
    window.scrollTo(0, 0);
  });
}

async function prerenderRoute(page, baseUrl, route) {
  const url = route === '/' ? baseUrl : `${baseUrl}${route}`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('[data-page-meta-ready="true"]', { timeout: 30000 });
  await scrollPage(page);
  await delay(400);

  const html = await page.content();
  const outFile =
    route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');
  return outFile;
}

async function main() {
  if (!fs.existsSync(dist)) {
    console.error('dist/ not found. Run vite build first.');
    process.exit(1);
  }

  const { server, baseUrl } = await startStaticServer();
  console.log(`Static server ready at ${baseUrl}`);

  const stopServer = () => {
    if (server.listening) server.close();
  };

  process.on('SIGINT', () => {
    stopServer();
    process.exit(1);
  });
  process.on('SIGTERM', () => {
    stopServer();
    process.exit(1);
  });

  try {
    const browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    const context = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await context.newPage();

    for (const route of prerenderRoutes) {
      console.log(`Prerendering ${route}…`);
      const outFile = await prerenderRoute(page, baseUrl, route);
      console.log(`  wrote ${path.relative(root, outFile)}`);
    }

    await browser.close();
    console.log(`Prerendered ${prerenderRoutes.length} routes.`);
  } catch (error) {
    console.error('Prerender failed:', error);
    process.exitCode = 1;
  } finally {
    stopServer();
  }
}

main();
