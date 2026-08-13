class NewAccount {
    constructor(page) {
        this.page = page;
        this.Accounts = page.locator('//a[@data-nav="accounts"]');
        this.AddAccount = page.locator('//button[@data-testid="add-account-btn"]');
        this.name = page.locator('//input[@id="account-form-name"]');
        this.Accountvalue = page.locator('//span[@data-slot="select-value"]');
        this.Accounttype = page.locator('//div[text()="Savings"]');
        this.Entervalue = page.locator('//input[@type="number"]');
        this.checkbox = page.locator('//span[@role="checkbox"]');
        this.save = page.locator('//button[@data-testid="save-account-form-btn"]');
    }

    async createAccount(name, amount) {
        await this.Accounts.click();
        await this.AddAccount.click();
        await this.name.fill(name);
        await this.Accountvalue.click();
        await this.Accounttype.click();
        await this.Entervalue.fill(amount.toString());
        await this.checkbox.check();
        await this.save.click();
    }
}

module.exports = NewAccount;