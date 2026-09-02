

import { test, expect } from "@playwright/test"
test('verify account created', async ({ page }) => {
    await page.goto("https://qaplayground.com/bank/login")
    await page.locator('//input[@data-testid="login-username-input"]').fill(process.env.BANKING_USERNAME)
    await page.locator('//input[@data-testid="login-password-input"]').fill(process.env.BANKING_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    // await page.locator('//p[text()="Move funds between your accounts"]').click()
    // await page.locator('//span[@data-slot="select-value"]').click()
    // await page.locator('//div[text()="Everyday Checking"]').click()
    // await page.locator('//button[@id="transfer-to-trigger"]').click()
    await page.locator('//a[@data-nav="accounts"]').click()
await page.locator('//button[@data-testid="add-account-btn"]').click()
await page.locator('//input[@id="account-form-name"]').fill('latha5')
await page.locator('//span[@data-slot="select-value"]').click()
await page.locator('//div[text()="Savings"]').click()
await page.locator('//input[@type="number"]').fill('50000')
await page.locator('//span[@role="checkbox"]').check()
await page.locator('//button[@data-testid="save-account-form-btn"]').click()
console.log("Account Created Successfully")


})
