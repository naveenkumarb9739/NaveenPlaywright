import { test, expect } from "@playwright/test"
test('verify login with valid creds', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')).toBeVisible({ timeout: 15000 })
    await page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()
    await page.locator(`//a[@href="#"][text()='Candidates']`).click();
    await page.locator('//button[text()=" Add "]').click()
    await page.locator('input[name="firstName"]').fill('test  qa')
    await page.locator('input[name="lastName"]').fill('jr')  
    await page.locator('(//input[@placeholder="Type here"])[1]').fill('testqajr@gmail.com')
    // await page.getByRole('option', { name: 'Senior QA Lead' }).click();
    // await page.locator('.oxd-icon.bi-check').click();
    await page.locator('button[type="submit"]').click()
    console.log ('candidate full')



})

