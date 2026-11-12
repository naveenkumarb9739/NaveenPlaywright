import { test, expect } from "@playwright/test";

test('verify d&d', async ({ page }) => {
    await page.goto('https://practice.qabrains.com/');
    await page.locator('#drag-drop').click();
    await page.locator('//div[text()="Drag Me"]').dragTo(page.locator('//div[text()="Drop Here"]'))


    // const dragMe = page.locator('div', { hasText: 'Drag Me' }).first();
    // const dropHere = page.locator('div', { hasText: 'Drop Here' }).first();

    // await expect(dragMe).toBeVisible();
    // await expect(dropHere).toBeVisible();  

    // await dragMe.dragTo(dropHere);
});