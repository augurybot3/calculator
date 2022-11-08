let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0, 9);
    }
}
  
updateDisplay();

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            } else if(buttons[i].classList.contains('clear'))
                clearDisplay();
                updateDisplay();
        }
    )}
}

clickButton();

function inputOperand(operand) {
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            //1st click - handles first operand input
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            //starts new operation after inputEquals()
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        //3rd/5th click - inputs to secondOperand
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(operator) {
    if(firstOperator != null && secondOperator === null) {
        //4th click - handles input of second operator
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if(firstOperator != null && secondOperator != null) {
        //6th click - new secondOperator
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundAccurately(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else { 
        //2nd click - handles first operator input
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

function inputEquals() {
    //hitting equals doesn't display undefined before operate()
    if(firstOperator === null) {
        displayValue = displayValue;
    } else if(secondOperator != null) {
        //handles final result
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if(result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        //handles first operation
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if(result === 'lmao') {
            displayValue = 'lmao';
        } else {
            displayValue = roundAccurately(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}

function inputPercent(num) {
    displayValue = (num/100).toString();
}

function inputSign(num) {
    displayValue = (num * -1).toString();
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function inputBackspace() {
    if(firstOperand != null) {
        firstOperand = null;
        updateDisplay();
    }
}

function operate(x, y, op) {
    if(op === '+') {
        return x + y;
    } else if(op === '-') {
        return x - y;
    } else if(op === '*') {
        return x * y;
    } else if(op === '/') {
        if(y === 0) {
            return 'lmao';
        } else {
        return x / y;
        }
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}a



// 1. The code assigns the following values to variables:
// -displayValue:  string with initial value '0'
// -firstOperand:  null
// -secondOperand: null
// -firstOperator: null
// -secondOperator: null
// -result: null
// -buttons: variable that stores all buttons in document

// 2. The code adds an event listener to the window.  
// If a button is clicked, the code will run the function 'clickButton'.

// 3. The code runs the function 'updateDisplay'.  
// This function targets the element with id 'display', and sets the innerText equal to displayValue.  
// If the length of displayValue is greater than 9, it will only display the first 9 characters.

// 4. The code runs the function 'clickButton'.  
// This function loops through all the buttons in the document, and adds an event listener to each one.  
// If the button clicked has the class 'operand', the code will run the function 'inputOperand'.  
// If the button clicked has the class 'operator', the code will run the function 'inputOperator'.  
// If the button clicked has the class 'equals', the code will run the function 'inputEquals'.  
// If the button clicked has the class 'decimal', the code will run the function 'inputDecimal'.  
// If the button clicked has the class 'percent', the code will run the function 'inputPercent'.  
// If the button clicked has the class 'sign', the code will run the function 'inputSign'.  
// If the button clicked has the class 'clear', the code will run the function 'clearDisplay'.  

// 5. The code runs the function 'updateDisplay'.  
// This function targets the element with id 'display', and sets the innerText equal to displayValue.  
// If the length of displayValue is greater than 9, it will only display the first 9 characters.

// 6. The code defines the function 'inputOperand'. 
//  If the firstOperator variable is null, the code will either set displayValue equal to operand 
//  (if displayValue is '0' or 0), or concatenate operand to displayValue.  
//  If the firstOperator variable is not null, the code will concatenate operand to displayValue.

// 7. The code defines the function 'inputOperator'.  
// If the firstOperator and secondOperator variables are both not null, 
// the code will set secondOperator equal to operator, set secondOperand equal to displayValue, 
// run the function 'operate' with arguments firstOperand, secondOperand, and firstOperator, 
// set displayValue equal to the return value of 'operate', set firstOperand equal to displayValue, 
// set secondOperand and result equal to null, and set firstOperator equal to null.  
// If the firstOperator and secondOperator variables are both null, 
// the code will set firstOperator equal to operator and set firstOperand equal to displayValue.

// 8. The code defines the function 'inputEquals'.  
// If the firstOperator variable is null, the code will set displayValue equal to displayValue.  
// If the secondOperator variable is not null, the code will set secondOperand equal to displayValue, 
// run the function 'operate' with arguments firstOperand, secondOperand, and secondOperator, 
// set displayValue equal to the return value of 'operate', set firstOperand equal to displayValue, 
// set secondOperand, secondOperator, and result equal to null.  
// If the secondOperator variable is null, the code will set secondOperand equal to displayValue, 
// run the function 'operate' with arguments firstOperand, secondOperand, and firstOperator, 
// set displayValue equal to the return value of 'operate', set firstOperand equal to displayValue, 
// set secondOperand, firstOperator, and result equal to null.

// 9. The code defines the function 'inputDecimal'. 
//  If displayValue is equal to firstOperand or secondOperand, 
//  the code will set displayValue equal to '0' and concatenate '.' to displayValue. 
//   If displayValue does not include '.', the code will concatenate '.' to displayValue.

// 10. The code defines the function 'inputPercent'.  
// It sets displayValue equal to displayValue divided by 100.

// 11. The code defines the function 'inputSign'.  
// It sets displayValue equal to displayValue multiplied by -1.

// 12. The code defines the function 'clearDisplay'. 
//  It sets displayValue, firstOperand, secondOperand, firstOperator, secondOperator, and result equal to null.

// 13. The code defines the function 'operate'. 
//  If the op variable is '+', the code will return the sum of x and y.  
//  If the op variable is '-', the code will return the difference of x and y.  
//  If the op variable is '*', the code will return the product of x and y.  
//  If the op variable is '/', the code will return the quotient of x and y.

// 14. The code defines the function 'roundAccurately'.  
// It returns num to a specified number of decimal places.