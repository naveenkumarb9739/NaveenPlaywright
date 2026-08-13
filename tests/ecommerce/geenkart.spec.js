import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator('(//button[text()="ADD TO CART"])[1]').click();
  await page.locator('//img[@alt="Cart"]').click();
  await page.locator('//button[text()="PROCEED TO CHECKOUT"]').click();
  await page.locator('//button[text()="Place Order"]').click();
    await page.getByRole('combobox').selectOption('India');
      // await page.getByRole('checkbox').check();
      
  await page.locator('input[type="checkbox"]').check();
      await page.locator('//button[text()="Proceed"]').click()
      

  // await expect(page.locator('input[type="checkbox"]')).toBeChecked();
});