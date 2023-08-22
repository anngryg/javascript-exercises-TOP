const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sumArr = arr.reduce((sum,current) => sum+current, 0);
  return sumArr;
};

const multiply = function(arr) {
	let multiplyNum = arr.reduce((sum,current) => sum*current);
  return multiplyNum;
};

const power = function(a,b) {
let output=1;
for (i=0;i<b;i++){
  output=output*a;
}
return output
};

const factorial = function(a) {
  let output=1;
	for (i=a; i>0; i--){
    output=output*i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
