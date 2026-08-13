import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import BillPage from "../../POM/banking/bills";

test('verify bills', async ({ page }) => {
  const login = new LoginPage(page);
  const bills = new BillPage(page);

  await login.navigate();
  await login.login('standard_user', 'bank_sauce');
  await bills.paybills('100');
});