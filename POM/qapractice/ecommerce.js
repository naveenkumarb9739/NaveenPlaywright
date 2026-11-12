class ecommerce {
    constructor(page) {
        this.page = page;
        this.btnclick = page.locator('//a[text()="Start Practicing"]')
        this.ecombtn = page.locator('a[href="/practice-ecommerece-website"]')
        this.addtocart1 = page.locator('button[data-testid="add-to-cart-1"]')
        this.addtocart2 = page.locator('button[data-testid="add-to-cart-2"]')
        this.addtocart3 = page.locator('button[data-testid="add-to-cart-3"]')
        this.cartbtn = page.locator('button[data-testid="ecom-cart-button"]')
        this.buybtn = page.locator('button[data-testid="ecom-proceed-to-buy"]')
        this.adname = page.locator('input[data-testid="ecom-address-name"]')
        this.adstreet = page.locator('input[data-testid="ecom-address-street"]')
        this.adcity = page.locator('input[data-testid="ecom-address-city"]')
        this.adstate = page.locator('input[data-testid="ecom-address-state"]')
        this.adzip = page.locator('input[data-testid="ecom-address-zip"]')
        this.adsave = page.locator('button[data-testid="ecom-save-address"]')
        this.cdnum = page.locator('input[data-testid="ecom-card-number"]')
        this.cdexp = page.locator('input[data-testid="ecom-expiry"]')
        this.cdcvv = page.locator('input[data-testid="ecom-cvv"]')
        this.buynow = page.locator('button[data-testid="ecom-buy-now"]')
        this.pmbtn = page.locator('button[class="mt-3 btn btn-primary"]')
    }

    async navigate() {
        await this.page.goto('https://www.qapractice.com/');
    }

    async startPracticing() {
        await this.btnclick.click();
    }

    async openEcommerceSite() {
        await this.ecombtn.click();
    }

    async addProducts() {
        await this.addtocart1.click();
        await this.addtocart2.click();
        await this.addtocart3.click();
    }

    async goToCart() {
        await this.cartbtn.click();
    }

    async proceedToBuy() {
        await this.buybtn.click();
    }

    async fillAddress({ name, street, city, state, zip }) {
        await this.adname.fill(name);
        await this.adstreet.fill(street);
        await this.adcity.fill(city);
        await this.adstate.fill(state);
        await this.adzip.fill(zip);
        await this.adsave.click();
    }

    async enterCardDetails({ cardNumber, expiry, cvv }) {
        await this.cdnum.fill(cardNumber);
        await this.cdexp.fill(expiry);
        await this.cdcvv.fill(cvv);
    }

    async completePurchase({
        name,
        street,
        city,
        state,
        zip,
        cardNumber,
        expiry,
        cvv
    }) {
        await this.navigate();
        await this.startPracticing();
        await this.openEcommerceSite();
        await this.addProducts();
        await this.goToCart();
        await this.proceedToBuy();
        await this.fillAddress({ name, street, city, state, zip });
        await this.enterCardDetails({ cardNumber, expiry, cvv });
        await this.buynow.click();
        await this.pmbtn.click();
    }
}

module.exports = ecommerce;