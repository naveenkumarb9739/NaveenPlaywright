import { test, expect } from '@playwright/test';

test('verify add to cart', async ({ page }) => {
await page.goto('https://automationexercise.com/')
await page.locator('//a[text()=" Signup / Login"]').click()
await page.locator('input[data-qa="login-email"]').fill('testingqa1@gmail.com')
await page.locator('input[data-qa="login-password"]').fill('QAteam@*973912#')
await page.locator('button[data-qa="login-button"]').click()
await page.locator('(//a[text()="Add to cart"])[1]').click()
await page.locator('(//a[@href="/view_cart"])[2]').click()
await page.waitForTimeout(2000);
await page.locator('//img[@src="get_product_picture/1"]').isVisible()
await page.locator('a[class="btn btn-default check_out"]').click()
await page.locator('a[class="btn btn-default check_out"]').click()
await page.locator('input[data-qa="name-on-card"]').fill('testing QA')
await page.locator('input[data-qa="card-number"]').fill('1231123112311231')
await page.locator('input[data-qa="cvc"]').fill('852')
await page.locator('input[data-qa="expiry-month"]').fill('12')
await page.locator('input[data-qa="expiry-year"]').fill('2028')
await page.locator('button[data-qa="pay-button"]').click()
await page.locator('a[data-qa="continue-button"]').click()
await page.locator('//a[text()=" Home"]').isVisible()
})