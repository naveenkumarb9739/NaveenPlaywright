import { test, expect } from '@playwright/test';

test('verify login success', async ({ page }) => {
    // test.slow()
    await page.goto('https://www.qapractice.com/');
    await page.locator('//a[text()="Start Practicing"]').click();
    await page.locator('a[href="/practice-login-form"]').click();
    await page.locator('#login-email').fill('user@premiumbank.com');
    await page.locator('#login-password').fill('Bank@123');
    await page.locator('input[type="checkbox"]').check();
    await page.locator('#login-submit').click();
    await expect(page.locator('//button[text()="Back To Practice UI Automation Examples ➡️"]')).toBeVisible();
    await page.locator('//button[text()="Back To Practice UI Automation Examples ➡️"]').click()
});