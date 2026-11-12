class login {
    constructor(page) {
        this.page = page;
        this.btnclick = page.locator('//a[text()="Start Practicing"]')
        this.loginform = page.locator('a[href="/practice-login-form"]')


        this.email = page.locator('#login-email')

        this.password = page.locator('#login-password')
        this.checkbox=page.locator('input[type="checkbox"]')
        this.submit=page.locator('#login-submit')
        this.bthbutton=page.locator('//button[text()="Back To Practice UI Automation Examples ➡️"]')


    }
    async navigate(){
        await this.page.goto('https://www.qapractice.com/')

    }
    async login(email,password){
        await this.btnclick.click()
        await this.loginform.click()
        await this.email.fill(email)
        await this.password.fill(password)
        await this.checkbox.check()
        await this.submit.click()
        
        await this.bthbutton.click()
    }
}

module.exports = login ;