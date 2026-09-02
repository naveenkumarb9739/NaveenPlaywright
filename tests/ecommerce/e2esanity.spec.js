 

import { test, expect } from '@playwright/test';
const testData = require('../../test-data/ecommerce.json')
test('test', async ({ page }) => {

    await page.goto(testData.practiceSoftwareTesting.url)
    await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click()
    await page.locator('#btn-add-to-cart').click()
    await page.locator('a[data-test="nav-cart"]').click()
    await page.locator('button[data-test="proceed-1"]').click()

    await page.locator('#email').fill(process.env.PRACTICE_TESTING_USERNAME)
    await page.locator('#password').fill(process.env.PRACTICE_TESTING_PASSWORD)
    await page.locator('input[data-test="login-submit"]').click()
    await page.locator('button[data-test="proceed-2"]').click()
    await page.locator('[data-test="country"]').selectOption(testData.practiceSoftwareTesting.country)
    await page.locator('[data-test="postal_code"]').fill(testData.practiceSoftwareTesting.postalCode)
    await page.locator('#house_number').fill(testData.practiceSoftwareTesting.houseNumber)
    await page.locator('button[data-test="proceed-3"]').click()
    await page.locator('#payment-method').selectOption(testData.practiceSoftwareTesting.payment.paymentMethod)
    await page.locator('#credit_card_number').fill(testData.practiceSoftwareTesting.payment.cardNumber || '')
    await page.locator('#expiration_date').fill(testData.practiceSoftwareTesting.payment.expiryMonth + '/' + testData.practiceSoftwareTesting.payment.expiryYear)
    await page.locator('#cvv').fill(testData.practiceSoftwareTesting.payment.cvv)
    await page.locator('#card_holder_name').fill(testData.practiceSoftwareTesting.payment.nameOnCard)




    await page.locator('button[data-test="finish"]').dblclick()
})

