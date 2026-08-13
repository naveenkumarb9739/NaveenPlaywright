
import { test, expect } from "@playwright/test"
test('verify amount sent success', async ({ page }) => {
    await page.goto("https://qaplayground.com/bank/login")
    await page.locator('//input[@data-testid="login-username-input"]').fill('standard_user')
    await page.locator('//input[@data-testid="login-password-input"]').fill('bank_sauce')
    await page.locator('//button[@type="submit"]').click()
    //send money
    await page.locator('//a[@data-testid="quick-action-send-money"]').click()
    //clcick&select account 
    await page.locator('//span[text()="Select account"]').click()
    await page.locator('//div[text()="High-Yield Savings"]').click()
    //click&select payee
    await page.locator('//span[text()="Select a payee"]').click()
    await page.locator('//div[text()="Priya Mehta"]').click()
    //send amount and fill
    await page.locator('#send-amount').fill("580")
//send note
    await page.locator('#send-note').fill('college semester fee')
    //clisk review&confirm button
    await page.locator('//button[@data-testid="review-send-btn"]').click()
    await page.locator('//button[@data-testid="confirm-send-btn"]').click()
    await page.locator('//a[@data-testid="back-to-dashboard-btn"]').click()
    console.log("Amount transferred Succesfully")





})