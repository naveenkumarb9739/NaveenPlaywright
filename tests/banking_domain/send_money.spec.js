import { test, expect } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import MoneySentPage from "../../POM/banking/money_sent";

test('verify money sent', async ({ page }) => {
    const login = new LoginPage(page);
    const moneyTransfer = new MoneySentPage(page);

    await login.navigate();
    await login.login(process.env.BANKING_USERNAME, process.env.BANKING_PASSWORD);

    await moneyTransfer.money_sent('580', 'college semester fee');

    await moneyTransfer.assertDashboardVisible();
});