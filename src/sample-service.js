export default class CurrencyExchange {  
  static async getExchangeRate(targetCurrency) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/$${process.env.API_KEY}/pair/USD/${targetCurrency}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
