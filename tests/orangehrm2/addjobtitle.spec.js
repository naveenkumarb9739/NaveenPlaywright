import {test} from "@playwright/test"
import loginpage from "../../POM/orangehrm/login"

import addjobtitlepage from "../../POM/orangehrm/addjobtitle"
const testData = require('../../test-data/orangehrm.json')



test('verify add job title success', async ({page})=>{

    const login = new loginpage(page)
    const addjobtitle = new addjobtitlepage(page)

    await login.gotoLoginPage()
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD)
    await addjobtitle.addJobTitle(
        testData.jobTitle.name,
        testData.jobTitle.description,
        testData.jobTitle.note
    )

})