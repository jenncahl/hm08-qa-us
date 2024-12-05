const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {

  it('should set the address', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await expect($('#from')).toBeExisting();
    await expect($('#to')).toBeExisting();
  });

  it('should be able to select supportive plan', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const supportiveTariffButton = await $(page.supportiveTariffButton);
    await supportiveTariffButton.waitForClickable();
    await supportiveTariffButton.click();
    browser.pause(3000);
    await expect(supportiveTariffButton.parentElement()).toHaveElementClass('active');
  });

  it('should fill in the phone number', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    await expect(await helper.getElementByText(phoneNumber)).toBeExisting();

  });

  it('should add a credit card', async () => {
    const cardNumber = '4111111111111111'; // Example card number
    const cvvCode = '123';
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.fillCreditCardNumber(cardNumber, cvvCode);
    const linkButton = await $(page.linkButton);
    await linkButton.waitForDisplayed();
    await browser.keys('Tab');
    await linkButton.waitForDisplayed();
    await linkButton.click();
    await expect(linkButton).toBeExisting();
  });

  it('should be able to write message for driver', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const messageToDriverField = await $(page.messageToDriverField);
    await messageToDriverField.setValue('Heat the car please');
    await expect(messageToDriverField).toHaveValue('Heat the car please');
  });

  it('should be able to order requirements', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const supportiveTariffButton = await $(page.supportiveTariffButton);
    await supportiveTariffButton.waitForExist();
    await supportiveTariffButton.click();
    const orderRequirements = await $(page.orderRequirements);
    await orderRequirements.waitForDisplayed();
    await orderRequirements.click();
    const blanketAndhandkerchiefs = await $(page.blanketAndhandkerchiefs);
    await blanketAndhandkerchiefs.waitForDisplayed();
    await blanketAndhandkerchiefs.click();
    await expect(blanketAndhandkerchiefs).toBeClickable();
  });

  it('should be able to order 2 ice creams', async () => {
        await browser.url('/')
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportiveTariffButton = await $(page.supportiveTariffButton);
        await supportiveTariffButton.waitForClickable();
        await supportiveTariffButton.click();
        const orderRequirements = await $(page.orderRequirements);
        await orderRequirements.waitForDisplayed();
        const iceCreamButton = await $(page.iceCreamButton);
        const iceCreamPlus = await $(page.iceCreamPlus);
        await iceCreamPlus.waitForDisplayed();
        await iceCreamPlus.click();
        await iceCreamPlus.click();
        await expect(iceCreamButton).toHaveText('2');
    });
   
  it('car modal should appear', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const supportiveTariffButton = await $(page.supportiveTariffButton);
    await supportiveTariffButton.waitForClickable();
    await supportiveTariffButton.click();
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    const orderTaxiButton = await $(page.orderTaxiButton);
    await orderTaxiButton.waitForDisplayed();
    await orderTaxiButton.click();
    const carModal = await $(page.carModal);
    await expect(carModal).toBeExisting();
  });

  

  it.only('should open driver details in car modal', async () => {
    await browser.url('/');
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    const supportiveTariffButton = await $(page.supportiveTariffButton);
    await supportiveTariffButton.waitForClickable();
    await supportiveTariffButton.click();
    const phoneNumber = helper.getPhoneNumber("+1");
    await page.submitPhoneNumber(phoneNumber);
    const orderTaxiButton = await $(page.orderTaxiButton);
    await orderTaxiButton.waitForDisplayed();
    await orderTaxiButton.click();
    const carModal = await $(page.carModal);
    browser.pause(6000);
    await expect(carModal).toBeExisting();
});
});