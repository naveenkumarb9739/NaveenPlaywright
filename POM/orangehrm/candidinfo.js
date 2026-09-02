// class Addcandidate{
//     constructor(page){

//         this.page=page
//         this.Recruitment=page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]')
//         this.candidates=page.locator(`//a[@href="#"][text()='Candidates']`)
//         this.Newcandidate=page.locator('//button[text()=" Add "]')
//         this.Fname=page.locator('input[name="firstName"]')
//         this.lname=page.locator('input[name="lastName"]')
//         this.ebtn=page.locator('(//input[@placeholder="Type here"])[1]')
//         this.sbtn=page.locator('button[type="submit"]')
//     }

//     async addcandidate(info){
//         await this.Recruitment.click()
//         await this.candidates.click()
//         await this.Newcandidate.click()
//         await this.Fname.fill(info.firstName)
//         await this.lname.fill(info.lastName)
//         await this.ebtn.fill(info.email)
//         await this.sbtn.click()
//     }
// }

class Addcandidate {
    constructor(page) {

        this.page = page
        this.Recruitment = page.locator('a[href="/web/index.php/recruitment/viewRecruitmentModule"]')
        this.candidates = page.locator(`//a[@href="#"][text()='Candidates']`)
        this.Newcandidate = page.locator('//button[text()=" Add "]')
        this.Fname = page.locator('input[name="firstName"]')
        this.lname = page.locator('input[name="lastName"]')
        this.ebtn = page.locator('(//input[@placeholder="Type here"])[1]')
        this.sbtn = page.locator('button[type="submit"]')
    }

    async addcandidate(info) {
        await this.Recruitment.click()
        await this.candidates.click()
        await this.Newcandidate.click()

        await this.Fname.fill(info.firstName)
        await this.lname.fill(info.lastName)
        await this.ebtn.fill(info.email)

        await this.sbtn.click()
    }
}

// module.exports = Addcandidate
module.exports = Addcandidate