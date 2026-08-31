import {expect,test} from '@playwright/test'

test('verify recruitment success', async ({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@name="password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()

    await expect(page).toHaveURL(/dashboard\/index/)

    await page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').click()
    await page.getByRole('link', { name: 'Vacancies', exact: true }).click()
    await expect(page).toHaveURL(/recruitment\/viewJobVacancy/)
    await page.getByRole('button', { name: 'Add' }).click()
    await expect(page.getByText('Add Vacancy')).toBeVisible()
    await page.locator('input.oxd-input').nth(1).fill('QA Manual')

    const jobTitle = page.locator('div.oxd-select-text').first()
    await jobTitle.click()
    await page.locator('div[role="option"]').getByText('Automation Tester', { exact: true }).click()

  await page.getByRole('button', { name: 'Save', exact: true }).click()
  await expect(page.getByText('Successfully Saved')).toBeVisible()

  console.log('recruitment vacancy updated')
})
