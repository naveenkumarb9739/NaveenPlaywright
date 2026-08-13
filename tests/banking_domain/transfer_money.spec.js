import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import TransferMoneyPage from "../../POM/banking/transfer_money";

test("verify money transfer success with pom", async ({ page }) => {
    const login = new LoginPage(page);
    const transferMoney = new TransferMoneyPage(page);

    await login.navigate();
    await login.login('standard_user', 'bank_sauce');

    await transferMoney.transferMoney('50');
    await transferMoney.assertDashboardVisible();
});
