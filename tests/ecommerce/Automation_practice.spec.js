import { test, expect } from '@playwright/test';
const testData = require('../../test-data/ecommerce.json')

test('verify add to cart', async ({ page }) => {
await page.goto('https://automationexercise.com/')
// await page.locator('//div[text()="Close"]').click()
await page.locator('//a[text()=" Signup / Login"]').click()
await page.locator('input[data-qa="login-email"]').fill(process.env.AUTOMATION_EXERCISE_USERNAME)
await page.locator('input[data-qa="login-password"]').fill(process.env.AUTOMATION_EXERCISE_PASSWORD)
await page.locator('button[data-qa="login-button"]').click()
await page.locator('a[href="#Women"]').click()
await page.locator('a[href="/category_products/7"]').click()
// await page.getByRole('link', { name: ' Add to cart' }).nth(2).click();


await page.locator('(//a[text()="Add to cart"])[1]').click() 
await page.locator('(//a[@href="/view_cart"])[2]').click()
await page.waitForTimeout(2000);
await page.locator('//img[@src="get_product_picture/1"]').isVisible()
await page.locator('a[class="btn btn-default check_out"]').click()
// await page.locator('a[class="btn btn-default check_out"]').click()
await page.locator('input[data-qa="name-on-card"]').fill(testData.automationExercise.payment.nameOnCard)
await page.locator('input[data-qa="card-number"]').fill(testData.automationExercise.payment.cardNumber)
await page.locator('input[data-qa="cvc"]').fill(testData.automationExercise.payment.cvc)
await page.locator('input[data-qa="expiry-month"]').fill(testData.automationExercise.payment.expiryMonth)
await page.locator('input[data-qa="expiry-year"]').fill(testData.automationExercise.payment.expiryYear)
await page.locator('button[data-qa="pay-button"]').click()
await page.locator('a[data-qa="continue-button"]').click()
await page.locator('//a[text()=" Home"]').isVisible()
})