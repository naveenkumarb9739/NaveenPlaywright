import { test, expect } from '@playwright/test';

test('verify product delivered', async ({ page }) => {
    // test.slow()
    await page.goto('https://www.qapractice.com/');
    await page.locator('//a[text()="Start Practicing"]').click();
    await page.locator('a[href="/practice-ecommerece-website"]').click();
    await page.locator('button[data-testid="add-to-cart-1"]').click();
    await page.locator('button[data-testid="add-to-cart-2"]').click();
    await page.locator('button[data-testid="add-to-cart-3"]').click();
    await page.locator('button[data-testid="ecom-cart-button"]').click();
    await page.locator('button[data-testid="ecom-proceed-to-buy"]').click();
    await page.locator('input[data-testid="ecom-address-name"]').fill('testqa');
    await page.locator('input[data-testid="ecom-address-street"]').fill('abc');
    await page.locator('input[data-testid="ecom-address-city"]').fill('xyz');
    await page.locator('input[data-testid="ecom-address-state"]').fill('jkl')
    await page.locator('input[data-testid="ecom-address-zip"]').fill('154464')
    await page.locator('button[data-testid="ecom-save-address"]').click()
    await page.locator('input[data-testid="ecom-card-number"]').fill('1234123412341234')
    await page.locator('input[data-testid="ecom-expiry"]').fill('12/36')
    await page.locator('input[data-testid="ecom-cvv"]').fill('121')
    await page.locator('button[data-testid="ecom-buy-now"]').click()
    await page.locator('button[class="mt-3 btn btn-primary"]').click()
    await expect(page.locator('//a[text()="Start Practicing"]')).toBeVisible()





})

