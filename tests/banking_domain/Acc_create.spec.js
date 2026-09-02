import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import NewAccount from "../../POM/banking/acc_create";
const testData = require('../../test-data/banking.json');

test('verify account', async ({ page }) => {
   const login = new LoginPage(page);
   const acc_create = new NewAccount(page);

   await login.navigate();
   await login.login(process.env.BANKING_USERNAME, process.env.BANKING_PASSWORD);
   await acc_create.createAccount(testData.accountCreation.name, testData.accountCreation.initialDeposit);
});