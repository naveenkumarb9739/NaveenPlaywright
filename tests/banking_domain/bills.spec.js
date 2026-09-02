import { test } from "@playwright/test";
import LoginPage from "../../POM/banking/login";
import BillPage from "../../POM/banking/bills";
const testData = require('../../test-data/banking.json');

test('verify bills', async ({ page }) => {
  const login = new LoginPage(page);
  const bills = new BillPage(page);

  await login.navigate();
  await login.login(process.env.BANKING_USERNAME, process.env.BANKING_PASSWORD);
  await bills.paybills(testData.billPayment.amount);
});