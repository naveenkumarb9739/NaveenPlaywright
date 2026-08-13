import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import LoanPage from "../../POM/banking/loanpage";

// const LoginPage = require('../POM/LoginPage');
// const LoanPage = require('../pages/LoanPage');

test('verify loan applied', async ({ page }) => {

    const login = new LoginPage(page);
    const loan = new LoanPage(page);

    await login.navigate();

    await login.login('standard_user', 'bank_sauce');

    await loan.applyLoan(
        '50000',
        '10',
        'for construction needs'
    );

});