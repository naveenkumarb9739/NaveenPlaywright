import{expect,test} from '@playwright/test'
test('verify buzz is displayed', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(process.env.ORANGEHRM_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.ORANGEHRM_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    // await page.waitForURL(/.*\/dashboard\/index.*/, { timeout: 15000 })
    await expect(page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')).toBeVisible({ timeout: 15000 })

    await page.locator('a[href="/web/index.php/buzz/viewBuzz"]').click()
    await page.locator('textarea[placeholder="What\'s on your mind?"]').fill('asdfghg')
    await page.locator('button[type="submit"]').click()

})