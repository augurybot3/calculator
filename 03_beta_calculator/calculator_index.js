
let displayValue = document.getElementById('display').innerText;
var digit = null;
var digits = null;
let digitsA = null;
let digitsB = null;
let operatorA = null;
let operatorB = null;
let result = null;
var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
      buttonClick(e.target.className);
  });
};

// function newDisplay() {
//   if(displayValue.length > 9) {
//       displayValue = displayValue.substring(0, 9);
//   }
// }

function updateDisplay(newInput){
 input = document.getElementById('display').innerText;
 input = newInput;

}

   function buttonClick(className) {
    switch (className) {
        case "digits":
            updateDigits();
            break;
        case "opperate":
            updateOperation();
            break;
        case "equals":
            calculate();
            break;
        case "clear":
            clear();
            break;
        case "decimal":
            updateDecimal();
            break;
        case "percentage":
            updatePercentage();
            break;
        case "sign":
            sign();
            break;
        case "error":
            updateError();
            break;
        case "calculate":
            calculate();
        default:
          displayValue = '0';
    }
};


function updateDigits() {
  let number = displayValue;
  for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
      var value = this.textContent;
      displayValue += value;
      var a = displayValue;
      console.log(a);
      displayValue = a;
      return a;
    });
  }
};




// function updateDigits() {
//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         if (operatorA == null) {
//           if (displayValue == '0') {
//             displayValue = this.value;
//           } else if (displayValue == digitsA) {
//             displayValue = this.value;
//           } else {
//             displayValue += this.value
//           }
//         } else {
//           if (displayValue == digitsA) {
//             displayValue = this.value;
//           } else {
//             displayValue += this.value;
//           }
//         }
//         newDisplay();
//         // updateDisplay();
//     });
//   }
// };




// function updateDigits(digit) {
//   document.querySelectorAll('.digits').forEach(digit => digit.innerText);
//   if(operatorA == null) {
//     if (displayValue = '0' || displayValue == 0){
//     displayValue = digit;
//   } else if (displayValue === digitsA){
//     displayValue = digit;
//   } else{
//     displayValue += digit;
//     }
//   } else {
//     if (displayValue === digitsA){
//       displayValue = digit;
//   } else {
//   displayValue += digit;
//   }};
//   newDisplay()
// };

function updateOperators() {

};

function updateCalculation() {

};

function updateDecimal(){

};

function updatePercentage(){

};

function updateSign(){

};

function updateClear(){

};

function calculate(){

};

function roundResult(){

};