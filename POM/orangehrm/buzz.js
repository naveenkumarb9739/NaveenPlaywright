class buzz {
    constructor(page) {
        this.page = page;
        this.Buzz = page.locator('a[href="/web/index.php/buzz/viewBuzz"]');
        this.buzzinput = page.locator('textarea[placeholder="What\'s on your mind?"]');
        this.Submit = page.locator('button[type="submit"]');
    }

    async buzz(message) {
        await this.Buzz.click();
        await this.buzzinput.fill(message);
        await this.Submit.click();
    }
}

module.exports = buzz;