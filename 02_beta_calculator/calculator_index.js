
var input = document.getElementById('input');
var number = document.getElementsByClassName('number');
var operator = document.getElementsByClassName('button');

function enterNumber() {
  for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
      var value = this.textContent;
      input.value += value;
      var a = input.value;
      console.log(a);
      return a;
    });
  }
};

var a = enterNumber();

function clear(){
  input.value = "";
}

function operate(){
  for (var i = 0; i < number.length; i++){
    operator[i].addEventListener('click', function(){
      var thisOpperator = this.textContent;
      console.log("opperator = " + thisOpperator);
      console.log("a = " + a);
      a = a + thisOpperator;
    })}};

  document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
      if (item.querySelector('.number')){
      a = enterNumber();
      if (item.querySelector('.operat')){
        operate();
        if(item.querySelector('.number')){
          clear();
          b = enterNumber();
        }
        if(item.querySelector('.operat')){
          equals(a);
        }
        if (item.querySelector('clear'){
          clear();
      }
     }
    }
  })});


  
  
  function add(a, b) {
    let sum = a + b;
    return sum;
  };
  // Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.












// function printNumber(num) {
//     input = document.querySelector('input').value;
//     input = input + num;
//     input = parseInt(input, 10);
//     document.querySelector('input').value = input;
//     };





























const subtract = function (x, y) {
  let subSum = x - y;
  return subSum;
};

const sum = function (array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function (array) {
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};


