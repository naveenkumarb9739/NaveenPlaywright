// import { test, expect } from "@playwright/test"

// test('verify multiple products added', async ({ page }) => {

//   // await page.goto('https://practicesoftwaretesting.com/')
//   await page.goto('https://practicesoftwaretesting.com/')
//   await page.locator('a[aria-label="Page-5"]').click()
//   await page.locator('img[alt="Cordless Drill 24V"]').click()
//   await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
//   await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('1');

//   await page.locator('a[data-test="nav-home"]').click()
//   await page.locator('a[aria-label="Page-5"]').click()
//   await page.locator('img[alt="Cordless Drill 12V"]').click()
//   await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
//   // await expect(page.locator('span[data-test="cart-quantity"]')) .toHaveText('2');
//   // await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('2');
//   await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('2');

//     //  await page.locator('span[data-test="cart-quantity"]').isVisible({ timeout: 30000 })
//   await page.locator('a[data-test="nav-home"]').click()
//   await page.locator('a[aria-label="Page-5"]').click()
//   await page.locator('img[alt="Circular Saw"]').click()
//   await page.locator('#btn-add-to-cart').click({ timeout: 30000 })
//   await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('3')
//   await page.locator('a[data-test="nav-cart"]').click()
//   await page.locator('button[data-test="proceed-1"]').click()
//   await page.locator('#email').fill('admin@practicesoftwaretesting.com')
// await page.locator('//input[@data-test="password"]').fill('welcome01')
//     await page.locator('(//input[@type="submit"])[1]').click();
//     await page.locator('//button[@data-test="proceed-2"]').click() 
//     // await page.locator('#country').selectOption('india')
//      await page.locator('[data-test="country"]').selectOption('IN')
//     await page.locator('//input[@data-test="postal_code"]').fill('560100');
//     await page.locator('#house_number').fill('100');
//     // await page.locator('//input[@data-test="street"]').click();
//     // await page.locator('#city').click();
//     // await page.locator('//input[@data-test="state"]').click();
//     await page.locator('//button[@data-test="proceed-3"]').click();
//     await page.locator('#payment-method').selectOption('Cash on Delivery')
//     // await page.locator('(//button[@type="button"])[2]').click()
//     await page.locator('button[data-test="finish"]').click()  




// })


// // // import { test, expect } from '@playwright/test';

// // test('test', async ({ page }) => {
// //   await page.goto('https://practicesoftwaretesting.com/');
// //   await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click();
// //   await page.locator('#btn-add-to-cart').click();
// //   await page.locator('a[data-test="nav-cart"]').click()

// // });


import { test, expect } from '@playwright/test';

test('verify multiple products added and checkout', async ({ page }) => {

  // 1. Open application
  await page.goto('https://practicesoftwaretesting.com/');

  // 2. Add first product
  await page.locator('a[aria-label="Page-5"]').click();
  await page.locator('img[alt="Cordless Drill 24V"]').click();

  await expect(page.locator('#btn-add-to-cart')).toBeVisible();
  await page.locator('#btn-add-to-cart').click();

  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('1');


  // 3. Add second product
  await page.locator('a[data-test="nav-home"]').click();
  await page.locator('a[aria-label="Page-5"]').click();
  await page.locator('img[alt="Cordless Drill 12V"]').click();

  await expect(page.locator('#btn-add-to-cart')).toBeVisible();
  await page.locator('#btn-add-to-cart').click();

  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('2');


  // 4. Add third product
  await page.locator('a[data-test="nav-home"]').click();
  await page.locator('a[aria-label="Page-5"]').click();
  await page.locator('img[alt="Circular Saw"]').click();

  await expect(page.locator('#btn-add-to-cart')).toBeVisible();
  await page.locator('#btn-add-to-cart').click();

  await expect(page.locator('span[data-test="cart-quantity"]')).toHaveText('3');


  // 5. Go to cart
  await page.locator('a[data-test="nav-cart"]').click();

  // 6. Proceed to checkout
  await page.locator('button[data-test="proceed-1"]').click();

  // 7. Login
  await page.locator('#email').fill('admin@practicesoftwaretesting.com');

  await page.locator('[data-test="password"]').fill('welcome01');

  await page.locator('input[data-test="login-submit"]').click();

  // 8. Proceed to address
  await page.locator('button[data-test="proceed-2"]').click();

  // 9. Enter address
  await page.locator('[data-test="country"]').selectOption('IN');

  await page.locator('[data-test="postal_code"]').fill('560100');

  await page.locator('#house_number').fill('100');
  await page.getByRole('textbox', { name: 'Street' }).fill('123 Main Street');
  await page.getByRole('textbox', { name: 'City' }).fill('Bengaluru');
  await page.getByRole('textbox', { name: 'State' }).fill('Karnataka');

  // 10. Proceed to payment
  const proceedToPayment = page.locator('button[data-test="proceed-3"]');
  await expect(page.getByRole('textbox', { name: 'Street' })).toHaveValue('123 Main Street');
  await expect(page.getByRole('textbox', { name: 'City' })).toHaveValue('Bengaluru');
  await expect(page.getByRole('textbox', { name: 'State' })).toHaveValue('Karnataka');
  await expect(proceedToPayment).toBeEnabled();
  await proceedToPayment.click();

  // 11. Select payment method
  await page.locator('#payment-method').selectOption({ label: 'Cash on Delivery' });

  // 12. Finish order
  await page.locator('button[data-test="finish"]').click();


});