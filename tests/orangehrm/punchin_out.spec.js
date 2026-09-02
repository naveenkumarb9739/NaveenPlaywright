import { expect, test } from "@playwright/test"
test('verify punch', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.locator('//input[@name="username"]').fill(process.env.ORANGEHRM_USERNAME)
  await page.locator('//input[@name="password"]').fill(process.env.ORANGEHRM_PASSWORD)
  await page.locator('//button[@type="submit"]').click()
  await page.locator('a[href="/web/index.php/time/viewTimeModule"]').click()
  await page.locator('//span[text()="Attendance "]').click()
  await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[2]').click()
  // await page.locator('input[placeholder="hh:mm"]').fill('01:13 PM')
  // await page.locator('textarea[placeholder="Type here"]').fill('Punch In')
  await page.locator('button[type="submit"]').click()
  // await page.locator('input[placeholder="yyyy-dd-mm"]').fill('2026-08-31')
  // await page.locator('input[placeholder="hh:mm"]').fill('08:00 PM')
  // await page.locator('textarea[placeholder="Type here"]').fill('exit')
  await page.locator('button[type="submit"]').click()



})