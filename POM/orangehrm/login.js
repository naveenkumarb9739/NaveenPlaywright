const { expect } = require('@playwright/test');

class loginpage{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@name="username"]')
        this.password=page.locator('//input[@name="password"]')
        this.button=page.locator('//button[@type="submit"]')
        this.assertion=page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
    }

   async navigate(){
    await this.gotoLoginPage();
   }

   async gotoLoginPage(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await this.page.waitForLoadState('domcontentloaded');
   }

   async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.button.click();
        await this.page.waitForURL(/.*\/dashboard\/index.*/, { timeout: 15000 });
        await expect(this.assertion).toBeVisible({ timeout: 15000 });
   }


}

module.exports = loginpage;