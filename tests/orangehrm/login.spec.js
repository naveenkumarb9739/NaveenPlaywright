import { test, expect } from "@playwright/test"
test('verify login with valid creds', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator('//span[text()="Job "]').click()
    await page.locator('//a[text()="Job Titles"]').click()
    await page.locator('//button[@type="button"][@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.locator('//h6[text()="Add Job Title"]').tobevisible
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("Qa engineer4yg")
    await page.locator('//textarea[@placeholder="Type description here"]').fill('Automation test engineer2hjjaf')
    await page.locator('button[type="submit"]').click()
})

