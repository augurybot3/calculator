

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
// It returns num to a specif

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
// It returns num to a specif