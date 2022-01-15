import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './sample-service.js'

function getElements(response, startAmount) {
  if (response) {
    $('.showResult').text(`${startAmount} USD exchanges to ${(response.conversion_rate * startAmount).toFixed(2)} in ${response.target_code}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(startAmount, targetCurrency) {
  const response = await CurrencyExchange.getExchangeRate(targetCurrency);
  console.log(response);
  getElements(response, startAmount);
}

$(document).ready(function() {
  $('#submit-button').click(function() {
    const startAmount = parseFloat($('#start-amount').val());
    const targetCurrency = $('#end-currency').val();
    makeApiCall(startAmount, targetCurrency);
  });
});