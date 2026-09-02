import {test, expect} from '@playwright/test'

test ('verify product is ordered', async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill(process.env.SAUCE_USERNAME)
    await page.locator('#password').fill(process.env.SAUCE_PASSWORD)
    await page.locator('#login-button').click()
    await page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]').click()
    await page.locator('#add-to-cart-sauce-labs-bike-light').click()
    await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click()
    await page.locator('a[data-test="shopping-cart-link"]').click()
    await page.locator('#checkout').click()
    await page.locator('#first-name').fill('testing')
    await page.locator('#last-name').fill('qa')
    await page.locator('#postal-code').fill('560100')
    await page.locator('#continue').click()
    await page.locator('#finish').click()
    await page.locator('#generate-pdf-order').click()
    await page.locator('#back-to-products').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    
    


})