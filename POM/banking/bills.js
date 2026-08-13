class BillPage {
    constructor(page) {
        this.page = page;
        this.billpayment = page.locator('a[data-nav="bill-pay"]');
        this.selectvalue = page.locator('span[data-slot="select-value"]');
        this.account = page.locator('//div[text()="Everyday Checking"]');
        this.billerinput = page.locator('#biller-search-input');
        this.role = page.getByRole('option', { name: /GreenWaste Disposal Ref: ACC-/ });

        this.amount = page.locator('#bill-amount');
        this.review = page.locator('//button[@data-testid="review-bill-btn"]');
        this.confirm = page.locator('//button[@data-testid="confirm-bill-btn"]');
        this.dashboard = page.locator('a[data-testid="back-to-dashboard-btn"]');
    }

    async paybills(amount = '100') {
        await this.billpayment.click();
        await this.selectvalue.click();
        await this.account.click();
        await this.billerinput.click();
        await this.role.click();
        await this.amount.fill(String(amount));
        await this.review.click();
        await this.confirm.click();
        await this.dashboard.click();
    }
}

module.exports = BillPage;

