import {expect,test} from '@playwright/test'

test('verify recruitment success', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()

    await page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()
    await page.locator('//a[text()="Vacancies"]').click()
    await page.locator('//button[text()=" Add "]').click()
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill('QA Manual')
// await page.locator('div[class="oxd-select-text-input"]').click()
 await page.getByText('-- Select --').click();
  await page.getByText('Automaton Tester').click();
  await page.locator('input[placeholder="Type for hints..."]').fill('John Michael Doe')
  await page.locator('//button[text()=" Save "]').click()

  console.log('recruitment vacancy updated')
})
