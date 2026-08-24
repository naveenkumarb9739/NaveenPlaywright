import { test, expect } from '@playwright/test'

test('verify e2e', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com/')
    await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click()
    await page.locator('#btn-add-to-cart').click()
    await page.locator('span[data-test="cart-quantity"]').click()
    await page.locator('button[data-test="proceed-1"]').click()
    await page.locator('#email').fill('admin@practicesoftwaretesting.com')
    await page.locator('#password').fill('welcome01')
    await page.locator('input[data-test="login-submit"]').click()
    await page.locator('button[data-test="proceed-2"]').click()
    await page.locator('[data-test="country"]').selectOption('IN')
    await page.locator('#postal_code').fill('560100')
    await page.locator('#house_number').fill('100')
    await page.locator('//button[@data-test="proceed-3"]').click()
    await page.locator('#payment-method').selectOption('Bank Transfer')
    await page.locator('#bank_name').fill('testqa')
    await page.locator('#account_name').fill('qa1')
    await page.locator('#account_number').fill('325687412663')
    await page.locator('button[data-test="finish"]').dblclick()
})


// import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/')
    await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click()
    await page.locator('#btn-add-to-cart').click()
    await page.locator('a[data-test="nav-cart"]').click()
    await page.locator('button[data-test="proceed-1"]').click()

    await page.locator('#email').fill('admin@practicesoftwaretesting.com')
    await page.locator('#password').fill('welcome01')
    await page.locator('input[data-test="login-submit"]').click()
    await page.locator('button[data-test="proceed-2"]').click()
    await page.locator('[data-test="country"]').selectOption('IN')
    await page.locator('[data-test="postal_code"]').fill('560100')
    await page.locator('#house_number').fill('100')
    await page.locator('button[data-test="proceed-3"]').click()
    await page.locator('#payment-method').selectOption('Cash on Delivery')
    await page.locator('button[data-test="finish"]').dblclick()
})

