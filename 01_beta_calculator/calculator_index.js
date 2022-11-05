// write  a function that takes an input from a button and runs a function based on the input
const buttons = document.querySelectorAll('.button');
let input = document.getElementById('input').value;
let numbers = [...Array(10).keys()];
const operators = ['+', '-', 'x', '/', '±', '%', '=', 'del', 'AC'];
// const operationBtn = buttons.filter(button => button.value != Number);
// const numberBtn = buttons.filter(button => button.value = Number);


function operation(id) {
  switch (id) {
    case "add":
      add();
      break;
    case "subtract":
      subtract();
      break;
    case "multiply":
      multiply();
      break;
    case "divide":
      divide();
      break;
    case "percent":
      percent();
      break;
    case "plus-minus":
      plusMinus();
      break;
    case "decimal":
      decimal();
      break;
    case "equals":
      equals();
      break;
    case "del":
      del();
    case "clear":
      clear();
    default:
  }};

  function printNumber(x){
    let value = x;
    document.getElementById('input').value += value;
    return x;
  }


    buttons.forEach(
      item => addEventListener('click', function(e){
        if (item.value = Number) {
          printNumber(item.value);
        } else{
          operation(e.target.id);
        }
      }));



      // function add(a, b) {
      //   printNumber(a);
      //   b = document.querySelector('input').value;
      //   input = a + b;
      //   let sum = a + b;
      //   return sum;
      // };

      // document.querySelector('#add').addEventListener
      //   ('click', () => {
      //     if (buttons.value = '+') {
      //       input.value = add;
      //     };

       function subtract(input, y) {
            let subSum = input - y;
            return subSum;
          };

          // const sum = function (array) {
          //   let total = 0;
          //   for (let i = 0; i < array.length; i++) {
          //     total += array[i];
          //   }
          //   return total;
          // };

          const multiply = function (array) {
            let total = 1;
            for (let i = 0; i < array.length; i++) {
              total *= array[i];
            }
            return total;
          };

          const power = function (x, y) {
            let total = 1
            for (let i = 0; i < y; i++) {
              total *= x;
            }
            return total;


          };

          const factorial = function (num) {
            if (num === 0) {
              return 1;
            }
            return num * factorial(num - 1);
          };
          // const newNumber = buttons.forEach(element => {
          //   document.querySelector(element).addEventListener
          //   ('click', () => {
          //   if (element.innerText === numbers.filter(element)){
          //     input.value = element.innerText;
          //   }else if (element.innerText === operators){
          //     input.value = operators.filter(element);
          //   }else if (element.innerText === '='){
          //     input.value =
          //   }else if (element.innerText === 'del'){
          //     input.value = '';
          //   };


          