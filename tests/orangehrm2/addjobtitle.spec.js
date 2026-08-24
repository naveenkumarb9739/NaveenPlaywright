import {test} from "@playwright/test"
import loginpage from "../../POM/orangehrm/login"

import addjobtitlepage from "../../POM/orangehrm/addjobtitle"



test('verify add job title success', async ({page})=>{

    const login = new loginpage(page)
    const addjobtitle = new addjobtitlepage(page)

    await login.gotoLoginPage()
    await login.login('Admin', 'admin123')
    await addjobtitle.addJobTitle('QA','AutomationTestEngineer','Full time Employee')

})