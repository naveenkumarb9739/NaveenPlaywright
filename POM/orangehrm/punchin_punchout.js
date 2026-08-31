class punch {
    constructor(page) {
        this.page = page
        this.time = page.locator('a[href="/web/index.php/time/viewTimeModule"]')
        this.attendance = page.locator('//span[text()="Attendance "]')
        this.punchInMenu = page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[2]')
        this.timeInput = page.locator('input[placeholder="hh:mm"]')
        this.noteInput = page.locator('textarea[placeholder="Type here"]')
        this.submitButton = page.locator('button[type="submit"]')
    }

    async punchIn() {
        await this.time.click()
        await this.attendance.click()
        await this.punchInMenu.click()
        await this.timeInput.fill('01:13 PM')
        await this.noteInput.fill('Punch In')
        await this.submitButton.click()
    }

    async punchOut() {
        await this.time.click()
        await this.attendance.click()
        await this.punchInMenu.click()
        await this.timeInput.fill('08:00 PM')
        await this.noteInput.fill('exit')
        await this.submitButton.click()
    }
}

module.exports = punch;



// class PunchClass {

//     constructor(page) {
//         this.page = page

//         // Time module
//         this.time = page.locator(
//             'a[href="/web/index.php/time/viewTimeModule"]'
//         )

//         // Attendance menu
//         this.attendance = page.getByText('Attendance', { exact: true })

//         // Punch In/Out page
//         this.punchInMenu = page.getByText('Punch In/Out', { exact: true })

//         // Punch In button
//         this.punchInButton = page.locator('button[type="submit"]')

//         // Punch Out button
//         this.punchOutButton = page.locator('button[type="submit"]')
//     }

//     async punchIn() {
//         await this.time.click()
//         await this.attendance.click()
//         await this.punchInMenu.click()

//         await this.punchInButton.click()
//     }

//     async punchOut() {
//         await this.punchOutButton.click()
//     }
// }

// export default PunchClass