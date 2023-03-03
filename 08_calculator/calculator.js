const add = function(num) {
  let add = 0;

	for (let i = 0; i < arguments.length; i++){
    add += arguments[i];
  };
  
  return add;
};

const subtract = function(num) {
	let sub = arguments[0];

	for (let i = 1; i < arguments.length; i++){
    sub -= arguments[i];
  };

  return sub;
};

const sum = function(array) {
  let totalSum = 0; 

	if(array.length == 0){
    return 0;
  }else{
    for (let num of array){
      totalSum += num;
    }
  }

  return totalSum;
};

const multiply = function(array) {
  let result = 1;

	for (let num of array){
    result *= num;
  }

  return result;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {
	if(n < 0){
    return "number has to be positive."
  }

  if(n == 0 || n == 1){
    return 1;

  }else{
    return n * factorial(n-1);
  }
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
