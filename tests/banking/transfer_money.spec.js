import { test, expect } from "@playwright/test"

test("verify money transfer success", async ({page}) => {
    await page.goto("https://qaplayground.com/bank/login")
    await page.locator('//input[@data-testid="login-username-input"]').fill('standard_user')
    await page.locator('//input[@data-testid="login-password-input"]').fill('bank_sauce')
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//span[text()="Transfer"]').click()
    await page.locator('#transfer-from-trigger').click()
    await page.locator('//div[text()="Everyday Checking"]').click()
    await page.locator('//span[text()="Select account"]').click()
    await page.locator('(//div[text()="High-Yield Savings"])[2]').click()
    await page.locator('#transfer-amount').fill('50')
    await page.locator('//input[@value="today"]').isChecked()
    console.log('is checked')
    await page.locator('//button[@data-testid="review-transfer-btn"]').click()
    await page.locator('//button[@data-testid="confirm-transfer-btn"]').click()
    await page.locator('//a[@data-testid="back-to-dashboard-btn"]').click()
    await page.locator('//a[@data-testid="sidebar-link-dashboard"]').isVisible()
    console.log('money transfer success')


})