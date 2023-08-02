const convertToCelsius = function(fahrenheit) {
  let output;
  let celsius = (fahrenheit-32)*(5/9);
  output= Math.round(celsius*10)/10;
  return output
};

const convertToFahrenheit = function(celsius) {
  let output;
  let fahrenheit=(celsius *9/5+32);
  output=Math.round(fahrenheit*10)/10;
  return output
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
