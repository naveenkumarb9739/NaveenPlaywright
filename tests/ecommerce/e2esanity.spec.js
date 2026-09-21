

// // import { test, expect } from '@playwright/test';
// // const testData = require('../../test-data/ecommerce.json')
// // test('test', async ({ page }) => {
// //     // test.slow()

// //     await page.goto(testData.practiceSoftwareTesting.url)
// //     await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]').click()
// //     await page.locator('#btn-add-to-cart').click()
// //     await page.locator('a[data-test="nav-cart"]').click()
// //     await page.locator('button[data-test="proceed-1"]').click()

// //     await page.locator('#email').fill(process.env.PRACTICE_TESTING_USERNAME)
// //     await page.locator('#password').fill(process.env.PRACTICE_TESTING_PASSWORD)
// //     await page.locator('input[data-test="login-submit"]').click()
// //     await page.locator('button[data-test="proceed-2"]').click()
// //     await page.locator('[data-test="country"] option').nth(1).waitFor({ state: 'attached', timeout: 10000 })
// //     await page.locator('[data-test="country"]').selectOption(testData.practiceSoftwareTesting.country)
// //     await page.locator('[data-test="postal_code"]').waitFor({ state: 'visible', timeout: 10000 })
// //     await page.locator('[data-test="postal_code"]').fill(testData.practiceSoftwareTesting.postalCode)
// //     await page.locator('#house_number').fill(testData.practiceSoftwareTesting.houseNumber)
// //     await page.locator('#house_number').press('Tab')
// //     const proceedToPayment = page.locator('button[data-test="proceed-3"]')
// //     // await expect(proceedToPayment).toBeEnabled({ timeout: 10000 })
// //     await proceedToPayment.click()
// //     await page.locator('#payment-method').selectOption(testData.practiceSoftwareTesting.payment.paymentMethod)
// //     await page.locator('#credit_card_number').fill(testData.practiceSoftwareTesting.payment.cardNumber || '')
// //     await page.locator('#expiration_date').fill(testData.practiceSoftwareTesting.payment.expiryMonth + '/' + testData.practiceSoftwareTesting.payment.expiryYear)
// //     await page.locator('#cvv').fill(testData.practiceSoftwareTesting.payment.cvv)
// //     await page.locator('#card_holder_name').fill(testData.practiceSoftwareTesting.payment.nameOnCard)




// //     await page.locator('button[data-test="finish"]').dblclick()
// // })


// // ```javascript
// import { test, expect } from '@playwright/test';

// const testData = require('../../test-data/ecommerce.json');

// test('complete product purchase', async ({ page }) => {

//     // Open application
//     await page.goto(testData.practiceSoftwareTesting.url);

//     // Select product
//     await page.locator('img[alt="Claw Hammer with Shock Reduction Grip"]' ).click();

//     // Add product to cart
//     await page.locator('#btn-add-to-cart').click();

//     // Open cart
//     await page.locator('a[data-test="nav-cart"]').click();

//     // Proceed to checkout
//     await page.locator('button[data-test="proceed-1"]').click();

//     // Login
//     const email = page.locator('#email');
//     await expect(email).toBeVisible();
//     await email.fill(process.env.PRACTICE_TESTING_USERNAME);

//     const password = page.locator('#password');
//     await expect(password).toBeVisible();
//     await password.fill(process.env.PRACTICE_TESTING_PASSWORD);

//     await page.locator('input[data-test="login-submit"]').click();

//     // Proceed to address
//     await page.locator('button[data-test="proceed-2"]').click();

//     // -------------------------
//     // ADDRESS DETAILS
//     // -------------------------

//     // Country
//     const country = page.locator('[data-test="country"]');

//     await expect(country).toBeVisible();
//     await expect(country).toBeEnabled();

//     await country.click();

//     await country.selectOption( testData.practiceSoftwareTesting.country);

//     // Postal Code
//     const postalCode = page.locator('[data-test="postal_code"]');

//     await expect(postalCode).toBeVisible();
//     await expect(postalCode).toBeEnabled();

//     await postalCode.click();

//     await postalCode.fill(testData.practiceSoftwareTesting.postalCode );

//     // Give autocomplete/dropdown time to process
//     await page.waitForTimeout(500);

//     // Remove focus from postal code
//     await postalCode.press('Tab');

//     // House Number
//     const houseNumber = page.locator('#house_number');

//     await expect(houseNumber).toBeVisible();
//     await expect(houseNumber).toBeEnabled();

//     await houseNumber.click();

//     await houseNumber.fill(testData.practiceSoftwareTesting.houseNumber );

//     // Give autocomplete/dropdown time to process
//     await page.waitForTimeout(500);

//     // Remove focus from house number
//     await houseNumber.press('Tab');

//     // -------------------------
//     // PROCEED TO PAYMENT
//     // -------------------------

//     const proceedToPayment = page.locator('button[data-test="proceed-3"]' );

//     // await expect(proceedToPayment).toBeVisible();
//     // await expect(proceedToPayment).toBeEnabled();

//     await proceedToPayment.click();

//     // -------------------------
//     // PAYMENT DETAILS
//     // -------------------------

//     const paymentMethod = page.locator('#payment-method');

//     await expect(paymentMethod).toBeVisible();

//     await paymentMethod.selectOption(testData.practiceSoftwareTesting.payment.paymentMethod );

//     const cardNumber = page.locator('#credit_card_number');

//     await expect(cardNumber).toBeVisible();

//     await cardNumber.fill(
//         testData.practiceSoftwareTesting.payment.cardNumber
//     );

//     const expirationDate = page.locator('#expiration_date');

//     await expect(expirationDate).toBeVisible();

//     await expirationDate.fill( `${testData.practiceSoftwareTesting.payment.expiryMonth}/${testData.practiceSoftwareTesting.payment.expiryYear}` );

//     const cvv = page.locator('#cvv');

//     await expect(cvv).toBeVisible();

//     await cvv.fill(testData.practiceSoftwareTesting.payment.cvv );

//     const cardHolderName = page.locator('#card_holder_name');

//     await expect(cardHolderName).toBeVisible();

//     await cardHolderName.fill( testData.practiceSoftwareTesting.payment.nameOnCard );

//     // -------------------------
//     // FINISH ORDER
//     // -------------------------

//     const finishButton = page.locator('button[data-test="finish"]' );

//     await expect(finishButton).toBeVisible();
//     await expect(finishButton).toBeEnabled();

//     // Use single click instead of double click
//     await finishButton.click();

//     // -------------------------
//     // VERIFY ORDER
//     // -------------------------

//     await expect(page.getByText(/Payment was successful/i)).toBeVisible({ timeout: 10000 });
// });


