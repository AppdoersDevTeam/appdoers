/**
 * Vercel-safe prerender: copies built index.html per route with route-specific meta tags.
 * No browser required (Playwright/Chromium often fails on Vercel build runners).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';
import { prerenderRoutes } from './prerender-routes.mjs';
import {
  defaultOgImage,
  defaultOgImageAlt,
  routeMeta,
  siteUrl,
} from './prerender-meta.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const templatePath = path.join(dist, 'index.html');

function pageUrl(route) {
  return route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
}

function applyMeta(templateHtml, route) {
  const meta = routeMeta[route];
  if (!meta) {
    throw new Error(`Missing route meta for ${route}`);
  }

  const url = pageUrl(route);
  const $ = cheerio.load(templateHtml, { decodeEntities: false });

  $('title').text(meta.title);
  $('meta[name="description"]').attr('content', meta.description);
  $('meta[name="robots"]').attr('content', 'index, follow');
  $('meta[property="og:title"]').attr('content', meta.title);
  $('meta[property="og:description"]').attr('content', meta.description);
  $('meta[property="og:url"]').attr('content', url);
  $('meta[property="og:image"]').attr('content', defaultOgImage);
  $('meta[property="og:image:alt"]').attr('content', defaultOgImageAlt);
  $('meta[name="twitter:title"]').attr('content', meta.title);
  $('meta[name="twitter:description"]').attr('content', meta.description);
  $('meta[name="twitter:image"]').attr('content', defaultOgImage);
  $('meta[name="twitter:image:alt"]').attr('content', defaultOgImageAlt);

  const canonical = $('link[rel="canonical"]');
  if (canonical.length === 0) {
    $('head').append(`<link rel="canonical" href="${url}">`);
  } else {
    canonical.attr('href', url);
  }

  return $.html();
}

function writeRouteHtml(route, html) {
  const outFile =
    route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, 'utf8');
  return outFile;
}

function main() {
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  for (const route of prerenderRoutes) {
    const html = applyMeta(template, route);
    const outFile = writeRouteHtml(route, html);
    console.log(`Prerendered ${route} -> ${path.relative(root, outFile)}`);
  }

  console.log(`Static prerender complete (${prerenderRoutes.length} routes).`);
}

main();
