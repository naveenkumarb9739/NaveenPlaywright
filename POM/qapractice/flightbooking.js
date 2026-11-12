class fbp{
constructor(page){
    this.page=page;
    this.startPracticingLink=page.locator('//a[text()="Start Practicing"]')
    this.flightBookingLink=page.locator('a[href="/flight-booking-scenarios"]')
    this.ffrom=page.locator('select[data-testid="flight-from"]')
    this.fto=page.locator('select[data-testid="flight-to"]')
    this.fdd=page.locator('input[data-testid="flight-departure-date"]')
    this.fpcount=page.locator('input[data-testid="flight-passengers"]')
    this.fclass= page.locator('select[data-testid="flight-class"]')
    this.foneway=page.locator('input[data-testid="flight-one-way"]')
    this.fsearch=page.locator('button[data-testid="flight-search"]')
    this.fselect=page.locator('button[data-testid="flight-select-AL248"]')
    this.fpbutton=page.locator('button[data-testid="flight-continue-to-passengers"]')
    this.fpname=page.locator('input[data-testid="flight-passenger-name"]')
this.fpemail=page.locator('input[data-testid="flight-passenger-email"]')
this.fpphone=page.locator('input[data-testid="flight-passenger-phone"]')
this.fpcpayment=page.locator('button[data-testid="flight-continue-to-payment"]')
this.fpcardnum=page.locator('input[data-testid="flight-card-number"]')
this.fpcdexp=page.locator('input[data-testid="flight-expiry"]')
this.fpcdcvv=page.locator('input[data-testid="flight-cvv"]')
this.fpbbutton=page.locator('button[data-testid="flight-book"]')
this.b2h=page.locator('//button[text()="Back To Home Page ➡️"]')

}

 async navigate() {
        await this.page.goto('https://www.qapractice.com/');
    }

    async sp() {
        await this.startPracticingLink.click();
    }

    async fbs() {
        await this.flightBookingLink.click();
    }

    async searchFlights({ from, to, departureDate, passengers, flightClass, oneWay = false }) {
        await this.ffrom.selectOption({ label: from });
        await this.fto.selectOption({ label: to });
        await this.fdd.fill(departureDate);
        await this.fpcount.fill(String(passengers));
        await this.fclass.selectOption({ label: flightClass });
        if (oneWay) await this.foneway.check();
        await this.fsearch.click();
    }

    async selectFlight() {
        await this.fselect.click();
        await this.fpbutton.click();
    }

    async enterPassengerDetails({ name, email, phone }) {
        await this.fpname.fill(name);
        await this.fpemail.fill(email);
        await this.fpphone.fill(phone);
        await this.fpcpayment.click();
    }

    async enterPaymentDetails({ cardNumber, expiry, cvv }) {
        await this.fpcardnum.fill(cardNumber);
        await this.fpcdexp.fill(expiry);
        await this.fpcdcvv.fill(cvv);
    }

    async bookFlight() {
        await this.fpbbutton.click();
    }

    async backToHome() {
        await this.b2h.click();
    }
}

module.exports = fbp;