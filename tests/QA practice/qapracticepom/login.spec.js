import { test } from '@playwright/test';
import LoginPage from '../../../POM/qapractice/login';

test('login success', async ({ page }) => {
   const loginPage = new LoginPage(page);
   await loginPage.navigate();
   await loginPage.login('user@premiumbank.com', 'Bank@123');
});

