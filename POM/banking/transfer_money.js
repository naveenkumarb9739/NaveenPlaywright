const { expect } = require('@playwright/test');

class TransferMoneyPage {
    constructor(page) {
        this.page = page;

        this.transferNav = page.locator('//span[text()="Transfer"]');
        this.transferFrom = page.locator('#transfer-from-trigger');
        this.fromAccount = page.locator('//div[text()="Everyday Checking"]');
        this.toAccount = page.locator('//span[text()="Select account"]');
        this.toAccountOption = page.locator('(//div[text()="High-Yield Savings"])[2]');
        this.amount = page.locator('#transfer-amount');
        this.todayRadio = page.locator('//input[@value="today"]');
        this.reviewTransfer = page.locator('//button[@data-testid="review-transfer-btn"]');
        this.confirmTransfer = page.locator('//button[@data-testid="confirm-transfer-btn"]');
        this.backToDashboard = page.locator('//a[@data-testid="back-to-dashboard-btn"]');
        this.dashboard = page.locator('//a[@data-testid="sidebar-link-dashboard"]');
    }

    async transferMoney(amount = '50') {
        await this.transferNav.click();
        await this.transferFrom.click();
        await this.fromAccount.click();
        await this.toAccount.click();
        await this.toAccountOption.click();
        await this.amount.fill(amount);
        await expect(this.todayRadio).toBeChecked();
        await this.reviewTransfer.click();
        await this.confirmTransfer.click();
        await this.backToDashboard.click();
    }

    async assertDashboardVisible() {
        await expect(this.dashboard).toBeVisible();
    }
}

module.exports = TransferMoneyPage;
