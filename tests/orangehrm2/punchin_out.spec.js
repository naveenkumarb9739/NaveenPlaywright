import {expect,test} from '@playwright/test'
import loginpage from "../../POM/orangehrm/login"
import punch from '../../POM/orangehrm/punchin_punchout'

test('verify punchin&out', async ({page}) =>{

    
    const login = new loginpage(page)
    const punchInOut = new punch(page)
     await login.gotoLoginPage()
    await login.login('Admin', 'admin123')
    await punchInOut.punchIn()
     await punchInOut.punchOut()

     console.log('Punch in/out completed');


})
