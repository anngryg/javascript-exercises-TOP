const reverseString = function(text) {
let myArray = text.split("");
let myArrayReverse = myArray.reverse();
let output = myArrayReverse.join("");
return output;
};
console.log(reverseString("how are you"))
// Do not edit below this line
module.exports = reverseString;
