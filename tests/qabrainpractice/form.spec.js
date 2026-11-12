import { test, expect } from "@playwright/test"
test('verify form updated', async ({ page }) => {
    await page.goto('https://practice.qabrains.com/')
    await page.locator('#form-submission').click()
    await page.locator('#name').fill('john doe')
    await page.locator('#email').pressSequentially('johndoe@gmail.com')
    await page.locator( '#contact').fill('25896314701')
    await page.locator('#date').fill('2027-12-12')
    await page.locator('#file').setInputFiles('test-data/Playwright_K.pdf')
    await page.locator('#Red').check()
    // const checkboxes = await page.locator('input[type="checkbox"]').all();

    // for (const checkbox of checkboxes) {
    //     await checkbox.check();
    // }
    const checkboxes = page.locator('input[type="checkbox"]');

    await expect(checkboxes.first()).toBeVisible();

    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
        await checkboxes.nth(i).check();
        await expect(checkboxes.nth(i)).toBeChecked();
    }
    await page.locator('#country').selectOption('India')

    await page.locator('button[data-slot="button"]').click()
    await expect (page.locator('//h2[text()="successfully submitted"]')).toBeVisible(
        
    )

})
