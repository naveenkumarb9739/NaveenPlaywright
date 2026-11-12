import { test, expect } from '@playwright/test';
import 'dotenv/config';`aa`

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
await page.getByRole('link', { name: ' Add to cart' }).nth(2).click();


// const addtocartbtn=await page.$$('a[class="btn btn-default add-to-cart"]')
// for (const add of addtocartbtn) {
//     await addtocartbtn.click()
// }
await page.locator('(//a[@href="/view_cart"])[2]').click()
await page.waitForTimeout(2000);
await page.locator('//img[@src="get_product_picture/1"]').isVisible()
await page.locator('a[class="btn btn-default check_out"]').click()
await page.locator('a[href="/payment"]').click()
await page.locator('input[data-qa="name-on-card"]').fill(testData.automationExercise.payment.nameOnCard)
await page.locator('input[data-qa="card-number"]').fill(testData.automationExercise.payment.cardNumber)
await page.locator('input[data-qa="cvc"]').fill(testData.automationExercise.payment.cvc)
await page.locator('input[data-qa="expiry-month"]').fill(testData.automationExercise.payment.expiryMonth)
await page.locator('input[data-qa="expiry-year"]').fill(testData.automationExercise.payment.expiryYear)
await page.locator('button[data-qa="pay-button"]').click()
await page.locator('a[data-qa="continue-button"]').click()
await page.locator('//a[text()=" Home"]').isVisible()
})


// import { test, expect } from '@playwright/test';
// import 'dotenv/config';

// const testData = require('../../test-data/ecommerce.json');

// test('verify add to cart', async ({ page }) => {

//     await page.goto('https://automationexercise.com/');

//     // Login
//     await page.locator('//a[text()=" Signup / Login"]').click();

//     await page.locator('input[data-qa="login-email"]') .fill(process.env.AUTOMATION_EXERCISE_USERNAME);

//     await page.locator('input[data-qa="login-password"]') .fill(process.env.AUTOMATION_EXERCISE_PASSWORD);

//     await page.locator('button[data-qa="login-button"]').click();

//     // Navigate to Women's category
//     await page.locator('a[href="#Women"]').click();
//     await page.locator('a[href="/category_products/7"]').click();

//     // Get all Add to Cart buttons
//     const addToCartButtons = page.locator('a.btn.btn-default.add-to-cart');

//     const count = await addToCartButtons.count();

//     // Add all products to cart
//     for (let i = 0; i < count; i++) {
//         await addToCartButtons.nth(i).click();

//         const continueShopping = page.getByRole('button', {
//             name: 'Continue Shopping'
//         });

//         if (await continueShopping.isVisible()) {
//             await continueShopping.click();
//         }
//     }

//     // Checkout
//     await page.locator('a[class="btn btn-default check_out"]').click();

//     await page.locator('a[href="/payment"]').click();

//     // Payment details
//     await page.locator('input[data-qa="name-on-card"]').fill(testData.automationExercise.payment.nameOnCard);

//     await page.locator('input[data-qa="card-number"]') .fill(testData.automationExercise.payment.cardNumber);

//     await page.locator('input[data-qa="cvc"]').fill(testData.automationExercise.payment.cvc);

//     await page.locator('input[data-qa="expiry-month"]').fill(testData.automationExercise.payment.expiryMonth);

//     await page.locator('input[data-qa="expiry-year"]') .fill(testData.automationExercise.payment.expiryYear);

//     await page.locator('button[data-qa="pay-button"]').click();

//     await page.locator('a[data-qa="continue-button"]').click();

//     // Assertion
//     await expect(page.locator('//a[text()=" Home"]')).toBeVisible();
// });