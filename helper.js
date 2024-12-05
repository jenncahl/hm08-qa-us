module.exports = {
        getPhoneNumber: function(countryCode) {
            const number = Math.floor(1000000000 + Math.random() * 9000000000)
            return `${countryCode}${number}`
        },
        getElementByText: async function(obj) {
            return await $(`div=${obj.toString()}`);
            //when we use this getElementByText function?
        },
        getCreditCardNumber: function() {
            const cardFirstpart = Math.floor(1000 + Math.random() * 9000);
            const cardSecondpart = Math.floor(1000 + Math.random() * 9000);
            const cardThirdpart = Math.floor(1000 + Math.random() * 9000);
            return `${cardFirstpart}${cardSecondpart}${cardThirdpart}`
        },
    
        getCVVcode: function() {
            const cvvCode = Math.floor(100 + Math.random() * 900);
            return `${getCode}`;
        },
        getSMScode: function() {
            const smsCode = math.floor(1000 + math.random () * 9000 );
            return `${getSMScode}`;
        }
};