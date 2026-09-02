import {expect,test} from '@playwright/test'
import loginpage from "../../POM/orangehrm/login"
import punch from '../../POM/orangehrm/punchin_punchout'
const testData = require('../../test-data/orangehrm.json')

test('verify punchin&out', async ({page}) =>{

    
    const login = new loginpage(page)
    const punchInOut = new punch(page)
     await login.gotoLoginPage()
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD)
    await punchInOut.punchIn(testData.punch.in.time, testData.punch.in.note)
     await punchInOut.punchOut(testData.punch.out.time, testData.punch.out.note)

     console.log('Punch in/out completed');


})
