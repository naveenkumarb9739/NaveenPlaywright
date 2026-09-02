import {test} from '@playwright/test';
import loginpage from '../../POM/orangehrm/login';


test('verify login success',async ({page})=>{
    const login = new loginpage(page);
    await login.navigate();
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD);
})