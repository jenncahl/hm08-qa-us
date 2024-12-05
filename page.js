const { getSMScode } = require("./helper");

module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cvvField: '.card-code-input #code',
    messageToDriverField: '#comment',
    cardNumberField: '#number',
    // Buttons
    callATaxiButton: '//button[starts-with(text(), "Call a taxi")]',
    phoneNumberButton: '.np-button',
    nextButton: 'div=Next',
    confirmButton: 'button=Confirm',
    supportiveTariffButton: 'div=Supportive',
    addCardButton: '.pp-plus',
    paymentMethodButton: '.pp-text',
    cancelButton: '//div[starts-with(text(), "Cancel")]',
    linkButton: 'button=Link',
    orderRequirements: '.reqs',
    blanketAndhandkerchiefs: '.r-sw',
    iceCreamPlus: 'div=+',
    iceCreamButton: '.counter-value',
    orderTaxiButton: '.smart-button-wrapper',

    // Modals
    phoneNumberModal: '.modal',
    creditCardModal: '.modal.unusual',
    carModal: '.order-body',

    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        await codeField.waitForDisplayed();
        const requests = await browser.getRequests();
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    fillCreditCardNumber: async function (cardNumber, cvvCode) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForClickable();
        await paymentMethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForClickable();
        await addCardButton.click();
        const creditCardModal = await $(this.creditCardModal);
        await creditCardModal.waitForDisplayed();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.waitForClickable();
        await cardNumberField.click();
        await cardNumberField.setValue(cardNumber);
        const cvvField = await $(this.cvvField);
        await cvvField.click();
        await cvvField.setValue(cvvCode);
    }
};