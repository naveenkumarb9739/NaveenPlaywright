import { expect, test } from '@playwright/test'
import loginpage from '../../POM/orangehrm/login'
import Addemp from '../../POM/orangehrm/addemp'


test('add employees', async ({ page }) => {
    const login = new loginpage(page)
    const addemp = new Addemp(page)

    await login.gotoLoginPage()
    await login.login('Admin', 'admin123')
    await addemp.Addemp('abcde', 'fghij')

})