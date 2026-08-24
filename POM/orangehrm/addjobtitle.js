class addjobtitle {
    constructor(page) {
        this.page = page;
        this.Admin = page.locator('a[href="/web/index.php/admin/viewAdminModule"]')
        this.job = page.locator('//span[text()="Job "]')
        this.jobtitles = page.locator('//a[text()="Job Titles"]')
        this.Addbutton = page.locator('//I[@class="oxd-icon bi-plus oxd-button-icon"]')
        this.jobtitleinput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.jobdescriptioninput = page.locator('textarea[placeholder="Type description here"]')
        this.addnoteinput = page.locator('textarea[placeholder="Add note"]')
        this.submitbutton = page.locator('button[type="submit"]')
    }

    async addJobTitle(jobTitle, jobDescription, jobNote){
        await this.Admin.click()
        await this.job.click()
        await this.jobtitles.click()
        await this.Addbutton.click()
        await this.jobtitleinput.fill(jobTitle)
        await this.jobdescriptioninput.fill(jobDescription)
        await this.addnoteinput.fill(jobNote)
        await this.submitbutton.click()


    }
}

module.exports =  addjobtitle;