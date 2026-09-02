import { expect, test } from '@playwright/test'
import loginpage from '../../POM/orangehrm/login'
import Addemp from '../../POM/orangehrm/addemp'
const testData = require('../../test-data/orangehrm.json')


test('add employees', async ({ page }) => {
    const login = new loginpage(page)
    const addemp = new Addemp(page)

    await login.gotoLoginPage()
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD)
    await addemp.Addemp(testData.employee.firstName, testData.employee.lastName)

})