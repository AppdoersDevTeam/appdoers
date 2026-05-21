import { test, expect } from '@playwright/test';

test.describe('Appdoers UI smoke', () => {
  test('homepage hero and sections render', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Appdoers/i);
    await expect(page.getByRole('heading', { name: /Speed of Ambition/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
  });

  test('services page shows only v1 products', async ({ page }) => {
    await page.goto('/services');
    await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'High-Performance Web' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Digital Systems & E-Commerce' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Ministry & Community' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'SEO' })).toHaveCount(0);
  });

  test('legacy product URLs redirect to services', async ({ page }) => {
    await page.goto('/seo');
    await expect(page).toHaveURL(/\/services$/);
  });

  test('digital systems product page', async ({ page }) => {
    await page.goto('/digital-systems');
    await expect(page.getByRole('heading', { name: 'Digital Systems & E-Commerce' })).toBeVisible();
    await expect(page.getByText('99.9% Uptime', { exact: true })).toBeVisible();
  });

  test('ministry product page', async ({ page }) => {
    await page.goto('/ministry');
    await expect(page.getByRole('heading', { name: 'Ministry & Community' })).toBeVisible();
    await expect(page.getByText('Zero Maintenance', { exact: true })).toBeVisible();
  });

  test('websites product page', async ({ page }) => {
    await page.goto('/websites');
    await expect(page.getByRole('heading', { name: 'High-Performance Web' })).toBeVisible();
  });

  test('pricing page has FAQ', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page.getByRole('heading', { name: 'Pricing FAQ' })).toBeVisible();
  });

  test('contact tier prefill', async ({ page }) => {
    await page.goto('/contact?tier=community');
    await expect(page.getByText('Selected plan: The Community Tier')).toBeVisible();
  });
});
