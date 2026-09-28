import {test, expect } from '@playwright/test'

test('verify flight tkt is booked', async ({page}) => {

    await page.goto('https://www.qapractice.com/')
    await page.locator('//a[text()="Start Practicing"]').click()
    await page.locator('a[href="/flight-booking-scenarios"]').click()
    await page.locator('select[data-testid="flight-from"]').selectOption('New York')
    await page.locator('select[data-testid="flight-to"]').selectOption('Tokyo')
    await page.locator('input[data-testid="flight-departure-date"]').fill('2026-10-10')

})