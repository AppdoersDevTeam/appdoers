import { test, expect } from '@playwright/test';

test.describe('Appdoers UI smoke', () => {
  test('homepage hero and sections render', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Appdoers/i);
    await expect(page.getByRole('heading', { name: /without the headache/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
  });

  test('services page shows core offerings', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Basic Website' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Full Website' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SEO' })).toHaveCount(0);
  });

  test('legacy product URLs redirect to services', async ({ page }) => {
    await page.goto('/seo');
    await expect(page).toHaveURL(/\/services$/);
  });

  test('full website product page', async ({ page }) => {
    await page.goto('/full-website');
    await expect(page.getByRole('heading', { name: 'Full Website' })).toBeVisible();
    await expect(page.getByText('Churches', { exact: true })).toBeVisible();
  });

  test('legacy ministry URL redirects to services', async ({ page }) => {
    await page.goto('/ministry');
    await expect(page).toHaveURL(/\/services$/);
  });

  test('basic website product page', async ({ page }) => {
    await page.goto('/basic-website');
    await expect(page.getByRole('heading', { name: 'Basic Website' })).toBeVisible();
  });

  test('pricing page has FAQ', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.getByRole('heading', { name: 'Common questions' })).toBeVisible();
  });

  test('unknown route shows 404 page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to Home' })).toBeVisible();
  });

  test('contact tier prefill', async ({ page }) => {
    await page.goto('/contact?tier=full-website&term=12&devUpfront=1199&includeEmail=0');
    await expect(page.getByRole('heading', { name: 'Your quote', level: 3 })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send quote & message' })).toBeVisible();
    await expect(page.getByText('Setup fee due today')).toBeVisible();
  });

  test('work page shows client case studies', async ({ page }) => {
    await page.goto('/work');
    await expect(page.getByRole('heading', { name: 'Journey of Insights' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'NZ Modern School of Music' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Visit jornadadeinsights\.com/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Visit everybodyplaying\.com/i })).toBeVisible();
  });

  test('homepage embeds Journey of Insights and links Everybody Playing', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('iframe[title="Journey of Insights live site"]')).toBeVisible();
    await expect(page.locator('iframe[title="NZ Modern School of Music live site"]')).toHaveCount(0);
    await expect(
      page.locator('img[alt="NZ Modern School of Music website preview"]')
    ).toBeVisible();
    await expect(page.getByRole('link', { name: /Open live site/i }).first()).toBeVisible();
  });

  test('privacy and terms pages render', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();

    await page.goto('/terms');
    await expect(page.getByRole('heading', { name: 'Terms of Service' })).toBeVisible();
  });

  test('homepage shows client testimonials and founder photos', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'What our clients say' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Patricia da Silva' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Gail Boswell' })).toBeVisible();
    await expect(page.locator('img[alt="Fabiano Da Silva"]')).toBeVisible();
    await expect(page.locator('img[alt="Sara Da Silva"]')).toBeVisible();
  });
});
