class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('//input[@data-testid="login-username-input"]');
        this.password = page.locator('//input[@data-testid="login-password-input"]');
        this.loginBtn = page.locator('//button[@type="submit"]');
    }

    async navigate() {
        await this.page.goto('https://qaplayground.com/bank/login');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

}

module.exports = LoginPage;