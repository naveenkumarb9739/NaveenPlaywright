import {test,expect} from '@playwright/test'
test('verify emp status is added', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()

 await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
  await page.locator('//span[text()="Job "]').click()
  await page.locator('//a[text()="Employment Status"]').click()
  await page.locator('//I[@class="oxd-icon bi-plus oxd-button-icon"]').click()
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('asdfbghj')
  await page.locator('button[type="submit"]').click()

})