const { expect } = require('@playwright/test');
class MoneySentPage {
    constructor(page) {
        this.page = page;

        this.sendmoney = page.locator('//a[@data-testid="quick-action-send-money"]');
        this.selectaccount = page.locator('//span[text()="Select account"]');
        this.clickaccount = page.locator('//div[text()="High-Yield Savings"]');
        this.selectpayee = page.locator('//span[text()="Select a payee"]');
        this.selectacholder = page.locator('//div[text()="Priya Mehta"]');
        this.enteramount = page.locator('#send-amount');
        this.enternote = page.locator('#send-note');
        this.review = page.locator('//button[@data-testid="review-send-btn"]');
        this.confirm = page.locator('//button[@data-testid="confirm-send-btn"]');
        this.dashboard = page.locator('//span[text()="Dashboard"]');
    }

    async money_sent(amount = '1.00', note = 'Test') {
        await this.sendmoney.click();
        await this.selectaccount.click();
        await this.clickaccount.click();
        await this.selectpayee.click();
        await this.selectacholder.click();
        await this.enteramount.fill(amount);
        await this.enternote.fill(note);
        await this.review.click();
        await this.confirm.click();
        await this.dashboard.click();
    }

    async assertDashboardVisible() {
        await expect(this.dashboard).toBeVisible();
    }
}

module.exports = MoneySentPage;