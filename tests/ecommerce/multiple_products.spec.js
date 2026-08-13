import { test, expect } from "@playwright/test"

test('verify multiple products added', async ({ page }) => {

  // await page.goto('https://practicesoftwaretesting.com/')
  await page.goto('https://practicesoftwaretesting.com/')
  await page.locator('a[aria-label="Page-5"]').click()
  await page.locator('img[alt="Cordless Drill 24V"]').click()
  await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('1');

  await page.locator('a[data-test="nav-home"]').click()
  await page.locator('a[aria-label="Page-5"]').click()
  await page.locator('img[alt="Cordless Drill 12V"]').click()
  await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
  // await expect(page.locator('span[data-test="cart-quantity"]')) .toHaveText('2');
  // await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('2');
  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('2');

    //  await page.locator('span[data-test="cart-quantity"]').isVisible({ timeout: 30000 })
  await page.locator('a[data-test="nav-home"]').click()
  await page.locator('a[aria-label="Page-5"]').click()
  await page.locator('img[alt="Circular Saw"]').click()
  await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('3')
  await page.locator('a[data-test="nav-cart"]').click()
  await page.locator('button[data-test="proceed-1"]').click()
  await page.locator('#email').fill('admin@practicesoftwaretesting.com')
await page.locator('//input[@data-test="password"]').fill('welcome01')
    await page.locator('(//input[@type="submit"])[1]').click();
    await page.locator('//button[@data-test="proceed-2"]').click() 
    // await page.locator('#country').selectOption('india')
     await page.locator('[data-test="country"]').selectOption('IN')
    await page.locator('//input[@data-test="postal_code"]').fill('560100');
    await page.locator('#house_number').fill('100');
    // await page.locator('//input[@data-test="street"]').click();
    // await page.locator('#city').click();
    // await page.locator('//input[@data-test="state"]').click();
    await page.locator('//button[@data-test="proceed-3"]').click();
    await page.locator('#payment-method').selectOption('Cash on Delivery')
    // await page.locator('(//button[@type="button"])[2]').click()
    await page.locator('button[data-test="finish"]').click()  
     



})


// // import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/');
//   await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click();
//   await page.locator('#btn-add-to-cart').click();
//   await page.locator('a[data-test="nav-cart"]').click()
  
// });