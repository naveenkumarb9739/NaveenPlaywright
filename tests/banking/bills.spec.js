import { test,expect } from "@playwright/test";

test('verify bill payments', async ({ page }) => {

     await page.goto("https://qaplayground.com/bank/login")
    await page.locator('//input[@data-testid="login-username-input"]').fill('standard_user')
    await page.locator('//input[@data-testid="login-password-input"]').fill('bank_sauce')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('a[data-nav="bill-pay"]').click()
    await page.locator('span[data-slot="select-value"]').click()
    await page.locator('//div[text()="Everyday Checking"]').click()
    await page.locator('#biller-search-input').click()
      await page.getByRole('option', { name: 'City Electric Co. Ref: ACC-' }).click();
      await page.locator('#bill-amount').fill('1000')
    await page.locator('//button[@data-testid="review-bill-btn"]').click()
await page.locator('//button[@data-testid="confirm-bill-btn"]').click()
await page.locator('a[data-testid="back-to-dashboard-btn"]').click()
console.log ('bill paid successfully')


})