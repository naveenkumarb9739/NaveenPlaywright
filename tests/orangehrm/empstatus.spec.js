import {test,expect} from '@playwright/test'
const testData = require('../../test-data/orangehrm.json')
test('verify emp status is added', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill(process.env.ORANGEHRM_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.ORANGEHRM_PASSWORD)
    await page.locator('//button[@type="submit"]').click()

 await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
  await page.locator('//span[text()="Job "]').click()
  await page.locator('//a[text()="Employment Status"]').click()
  await page.locator('//I[@class="oxd-icon bi-plus oxd-button-icon"]').click()
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(testData.employeeStatus.name)
  await page.locator('button[type="submit"]').click()

})