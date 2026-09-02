import { test } from '@playwright/test';
import loginpage from '../../POM/orangehrm/login';
import buzz from '../../POM/orangehrm/buzz';

test('verify buzz message success', async ({ page }) => {
    const login = new loginpage(page);
    const buzzPage = new buzz(page);

    await login.navigate();
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD);
    await buzzPage.buzz('hi good morning');
});
