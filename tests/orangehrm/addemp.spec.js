import { test, expect } from "@playwright/test"
test('verify login with valid creds', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(process.env.ORANGEHRM_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.ORANGEHRM_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//a[@href="/web/index.php/pim/viewPimModule"] ').click()
    await page.getByText('Add Employee').click();
    await page.locator('//input[@name="firstName"]').fill("B")
        await page.locator('//input[@name="lastName"]').fill("kanth")
        await page.locator('button[type="submit"]').click()
        console.log('employee created')
})