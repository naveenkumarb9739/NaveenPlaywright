class Addemp {
    constructor(page) {

        this.page = page
        this.pim = page.locator('//a[@href="/web/index.php/pim/viewPimModule"] ')
        this.Addemployee = page.getByText('Add Employee')
        this.firstname = page.locator('//input[@name="firstName"]')
        this.lastname = page.locator('//input[@name="lastName"]')
        this.submitbtn = page.locator('button[type="submit"]')


    }
    async Addemp(firstname, lastname) {
        await this.pim.click()
        await this.Addemployee.click()
        await this.firstname.fill(firstname)
        await this.lastname.fill(lastname)
        await this.submitbtn.click()
    }
}

module.exports = Addemp