const { expect } = require('@playwright/test');

class LoanPage {

    constructor(page) {
        this.page = page;

        this.applyLoanMenu = page.locator('//span[text()="Apply Loan"]');
        this.applyLoanBtn = page.locator('//button[text()="Apply for Loan"]');
        this.loanType = page.locator('//span[text()="Select loan type"]');
        this.homeLoan = page.locator('//div[text()="Home"]')
        this.loanAmount = page.locator('#loan-amount');
        this.loanTerm = page.locator('#loan-term-trigger');
        this.term24 = page.locator('//div[text()="24"]');
        this.interestRate = page.locator('#loan-interest-rate');
        this.accountDropdown = page.locator('#loan-account-trigger');
        this.everydayChecking = page.locator('//div[text()="Everyday Checking"]');
        this.purpose = page.locator('//textarea[@data-slot="textarea"]');
        this.reviewBtn = page.locator('//button[@data-testid="review-loan-btn"]');
        this.confirmBtn = page.locator('//button[@data-testid="confirm-loan-btn"]');
        this.backToDashboard = page.locator('//a[@data-testid="back-to-dashboard-btn"]');
        this.loanPageHeading = page.locator('//h1[text()="Apply for a Loan"]');
    }

    async applyLoan(amount, interest, purpose) {

        await this.applyLoanMenu.click();
        await this.applyLoanBtn.click();

        await this.loanType.click();
        await this.homeLoan.click();

        await this.loanAmount.fill(amount);

        await this.loanTerm.click();
        await this.term24.click();

        await this.interestRate.fill(interest);

        await this.accountDropdown.click();
        await this.everydayChecking.click();

        await this.purpose.fill(purpose);

        await this.reviewBtn.click();
        await this.confirmBtn.click();

        await this.backToDashboard.click();

        await expect(this.loanPageHeading).toBeVisible();

        console.log('Loan created successfully');
    }

}

module.exports = LoanPage;