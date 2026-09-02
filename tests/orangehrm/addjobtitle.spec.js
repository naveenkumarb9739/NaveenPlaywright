import {test,expect} from '@playwright/test'

test('verify add job title',async ({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator('input[name="username"]').fill(process.env.ORANGEHRM_USERNAME)
  await page.locator('input[name="password"]').fill(process.env.ORANGEHRM_PASSWORD)
  await page.locator('button[type="submit"]').click()
  await page.locator('a[href="/web/index.php/leave/viewLeaveModule"]').isVisible()
  // await page.locator('//span[text()="PIM"]').click()
  // await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click()
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
  await page.locator('//span[text()="Job "]').click()
  await page.locator('//a[text()="Job Titles"]').click()
  await page.locator('//I[@class="oxd-icon bi-plus oxd-button-icon"]').click()
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('asdfbghj')
  await page.locator('textarea[placeholder="Type description here"]').fill('tfayftccxTYUFTDRxtfyvcYBVCAG')
  await page.locator('textarea[placeholder="Add note"]').fill('tfynngvfdxfcvbnbvgcfxcv')
  await page.locator('button[type="submit"]').click()
})