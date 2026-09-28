import { test, expect } from "@playwright/test";

test("verify the lowest price", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.locator('//input[@id="user-name"]').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    const price = await page.locator('div[data-test="inventory-item-price"]').allTextContents()
    console.log(price)
    const numbers = price.map((price) => Number(price.replace("$", "")));
    console.log(numbers)
    const lowestprice=Math.max(...numbers)
    console.log(lowestprice)

})