import { test, expect } from '@playwright/test'
import loginpage from '../../POM/orangehrm/login';
import Addcandidate from '../../POM/orangehrm/candidinfo';
const testData = require('../../test-data/orangehrm.json')


test('verify candid info is saved ', async ({ page }) => {
    const login = new loginpage(page)
    const addcandidate = new Addcandidate(page)
    await login.navigate();
    await login.login(process.env.ORANGEHRM_USERNAME, process.env.ORANGEHRM_PASSWORD);
    await addcandidate.addcandidate(testData.candidate);
    // await expect(page).toHaveURL(/.*candidate/i);
})


// import { test, expect } from '@playwright/test'
// import loginpage from '../../POM/orangehrm/login'
// import Addcandidate from '../../POM/orangehrm/candidinfo'

// test('verify candid info is saved', async ({ page }) => {

//     const login = new loginpage(page)
//     const addcandidate = new Addcandidate(page)

//     await login.navigate()
//     await login.login('Admin', 'admin123')

//     const info = {
//         firstName: 'test',
//         lastName: 'QA',
//         email: 'testqa@abc.com'
//     }

//     await addcandidate.addcandidate(info)

//     // await expect(page).toHaveURL(/.*candidate/)
// })