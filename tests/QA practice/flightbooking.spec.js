import { test, expect } from '@playwright/test'
import FlightBooking from '../../POM/qapractice/flightbooking'
import testData from '../../test-data/flightbooking.json'

test('verify flight tkt is booked', async ({ page }) => {
    const flightBooking = new FlightBooking(page);

    await flightBooking.navigate();
    await flightBooking.sp();
    await flightBooking.fbs();
    await flightBooking.searchFlights(testData.search);
    await flightBooking.selectFlight();
    await flightBooking.enterPassengerDetails(testData.passenger);
    await flightBooking.enterPaymentDetails(testData.payment);
    await flightBooking.bookFlight();

    await expect(flightBooking.b2h).toBeVisible();
    await flightBooking.backToHome();
    await expect(page).toHaveURL('https://www.qapractice.com/');
})