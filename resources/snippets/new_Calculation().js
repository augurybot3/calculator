//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const new Calculation = () => {
  firstNumber = Number(document.getElementById('firstNumber').value);
  secondNumber = Number(document.getElementById('secondNumber').value);
  operation = (document.getElementById('operation').value).toLowerCase();
  const result = Math.round(operate(operation, firstNumber, secondNumber) * 100) / 100;
  console.log(result);
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
}


