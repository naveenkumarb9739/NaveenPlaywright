
import { test, expect } from '@playwright/test';

test('verify login success', async ({ page }) => {
    // test.slow()
    await page.goto('https://www.qapractice.com/');
    await page.locator('//a[text()="Start Practicing"]').click();
    await page.locator('a[href="/practice-forms"]').click()
    await page.locator('#forms-country').selectOption('India')
    await page.locator('#forms-title').selectOption('Ms.')
    await page.locator('#forms-first-name').fill('test')
    await page.locator('#forms-last-name').fill('QA')
    await page.locator('#forms-dob').fill('2002-10-26')
    await page.locator('#forms-doj').fill('22/05/2022')
    await page.locator('#forms-email').fill('testqa@gmail.com')
    await page.locator('#forms-phone-code').selectOption('+91')
    await page.locator('#forms-phone-number').fill('7854696485')
    await page.locator('#forms-comm-phone').check()
    await page.locator('#forms-submit').click()
    await expect(page.locator('//button[text()="Go Back to Form"]')).toBeVisible()


})