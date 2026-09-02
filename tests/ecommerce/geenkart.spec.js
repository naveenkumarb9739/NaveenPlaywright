import { test, expect } from '@playwright/test';
const testData = require('../../test-data/ecommerce.json');

test('test', async ({ page }) => {
  const greenKartData = testData.greenKart;

  await page.goto(greenKartData.url);
  await page.locator('button', { hasText: 'ADD TO CART' }).nth(greenKartData.productIndex).click();
  await page.locator('//img[@alt="Cart"]').click();
  await page.locator('//button[text()="PROCEED TO CHECKOUT"]').click();
  await page.locator('//button[text()="Place Order"]').click();
  await page.getByRole('combobox').selectOption(greenKartData.country);
  await page.locator('input[type="checkbox"]').setChecked(greenKartData.acceptTerms);
  await page.locator('//button[text()="Proceed"]').click()


});