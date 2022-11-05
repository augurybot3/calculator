// write  a function that takes an input from a button and runs a function based on the input
const buttons = document.querySelectorAll('.buttons');
let input = document.getElementById('input');
let nums = [...Array(10).keys()];



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
  
  const power = function(x, y) {
    let total = 1
    for ( let i = 0; i < y; i++ ){
      total *= x;
    } 
    return total;
    
      
  };
  
  const factorial = function(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  };