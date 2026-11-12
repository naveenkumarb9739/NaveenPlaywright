 class PracticeForm {
    constructor(page) {
        this.page = page;
        this.startPracticingLink = page.locator('//a[text()="Start Practicing"]');
        this.practiceFormLink = page.locator('a[href="/practice-forms"]');
        this.country = page.locator('#forms-country');
        this.title = page.locator('#forms-title');
        this.firstName = page.locator('#forms-first-name');
        this.lastName = page.locator('#forms-last-name');
        this.dateOfBirth = page.locator('#forms-dob');
        this.dateOfJoining = page.locator('#forms-doj');
        this.email = page.locator('#forms-email');
        this.phoneCode = page.locator('#forms-phone-code');
        this.phoneNumber = page.locator('#forms-phone-number');
        this.communicationPhone = page.locator('#forms-comm-phone');
        this.submitButton = page.locator('#forms-submit');
        this.goBackToFormButton = page.locator('//button[text()="Go Back to Form"]');
    }

    async navigate() {
        await this.page.goto('https://www.qapractice.com/');
    }

    async openForm() {
        await this.startPracticingLink.click();
        await this.practiceFormLink.click();
    }

    async fillForm({
        country,
        title,
        firstName,
        lastName,
        dateOfBirth,
        dateOfJoining,
        email,
        phoneCode,
        phoneNumber,
        communicationPhone,
    }) {
        await this.country.selectOption(country);
        await this.title.selectOption(title);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.dateOfBirth.fill(dateOfBirth);
        await this.dateOfJoining.fill(dateOfJoining);
        await this.email.fill(email);
        await this.phoneCode.selectOption(phoneCode);
        await this.phoneNumber.fill(phoneNumber);
        if (communicationPhone) {
            await this.communicationPhone.check();
        }
    }

    async submit() {
        await this.submitButton.click();
    }
}

module.exports = PracticeForm;