import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_HTpF4hWCT1fzTBUTpd8Uu1aKr2ccuBnhlGgujXZk');

//convertCurrency("USD", "INR", 50);

//convert fromcurrency to toCurrency units
export async function convertCurrency(fromCurrency, toCurrency, amount) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier * amount;
}
// freecurrencyapi.latest({
//         base_currency: 'USD',
//         currencies: 'INR'
//     }).then(response => {
//         console.log(response);
//     });