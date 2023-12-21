function convertCurrency() {
  var rupeesInput = document.getElementById("rupees");
  var outputDiv = document.getElementById("output");

  // 
  var rupeesAmount = parseFloat(rupeesInput.value);
  var conversionRate = 0.014; 
  var dollarsAmount = rupeesAmount * conversionRate;

  outputDiv.innerHTML =
    "&#8377; " +
    rupeesAmount.toFixed(2) +
    " INR is $" +
    dollarsAmount.toFixed(2);
}
