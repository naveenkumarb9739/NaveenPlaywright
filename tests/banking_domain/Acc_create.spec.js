import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import NewAccount from "../../POM/banking/acc_create";

test('verify account', async ({ page }) => {
   const login = new LoginPage(page);
   const acc_create = new NewAccount(page);

   await login.navigate();
   await login.login('standard_user', 'bank_sauce');
   await acc_create.createAccount('latha5', 50000);
});