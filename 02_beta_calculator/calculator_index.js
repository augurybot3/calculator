 //Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
  switch (operator) {
    case 'add':
      add(a, b);
      break;
    case 'subtract':
      subtract(a, b);
      break;
    case 'multiply':
      multiply(a, b);
      break;
    case 'divide':
      divide(a, b);
      break;

    default:
      break;
  }
};


// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
function printNumber(a){
  
  document.querySelectorAll('.number').forEach((button) => 
  { button.addEventListener('click', () => {
    a = button.textContent;
   document.getElementById('input').value = a;
  return a;
})})};

printNumber();











// function printNumber(num) {
//     input = document.querySelector('input').value;
//     input = input + num;
//     input = parseInt(input, 10);
//     document.querySelector('input').value = input;
//     };




























const add = function(x, y) {
    let sum = x + y;
    return sum;
  };
  
  const subtract = function(x, y) {
    let subSum = x - y;
    return subSum;
  };
  
  const sum = function(array) {
   let total = 0;
   for (let i = 0; i < array.length; i++){
     total += array[i];
    }
   return total;
  };
  
  const multiply = function(array) {
    let total = 1;
    for (let i = 0; i < array.length; i++){
      total *= array[i];
     }
    return total;
   };


