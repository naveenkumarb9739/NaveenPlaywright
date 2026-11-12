import { test,expect } from '@playwright/test';
import EcommercePage  from '../../../POM/qapractice/ecommerce'
import testData from '../../../test-data/ecommerce.json'

test('verify product is successfully placed', async ({ page }) => {
    const ecommercePage = new EcommercePage(page);
    const { address, card } = testData.qapracticeEcommerce;

    await ecommercePage.completePurchase({
        name: address.name,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        cardNumber: card.cardNumber,
        expiry: card.expiry,
        cvv: card.cvv
    });
});