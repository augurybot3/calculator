let testText = document.getElementById("test").innerText;

let digit = document.querySelectorAll(".dgt");

let decimal = document.getElementById("dec");

var digitStorageA = null;

var isOperated = false;

var operator = document.querySelectorAll(".operator");

var digitStorageB = null;

var result = null;

var isFraction = false;

const addDigits = () => {
digit.forEach(function(btn) {
    btn.addEventListener("click", function() {
        // change the innerText of element with the id "test" to the innerText of the clicked element
        testText = testText + btn.innerText;
        document.getElementById("test").innerHTML = testText;
        digitStorageA = testText;
        // console.log(digitStorageA);
    });
})};
addDigits();

    decimal.addEventListener("click", function() {
        // console.log(isFraction);
        if (isFraction === false){
        testText = testText + decimal.innerText;
        document.getElementById("test").innerHTML = testText;
        digitStorageA = testText;
        isFraction = true;
        // console.log("decimal added");
        // console.log(isFraction);
        // console.log(digitStorageA);
    } else{
        return;
    }
});

operator.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(digitStorageA !== null){
            isOperated = true
            clear();
            operator = btn.innerText;
            isFraction === false;
            addDigits();
        } 
        if (digitStorageA === null){
            return;
        } 
        if(isOperated = true && digitStorageB != null){
            clear();
            operate();
            }
        })});

function clear() {
    document.getElementById("test").innerHTML = "";
    testText = "";
}

const operate = (digitStorageA, digitStorageB, operator) => {
    switch (operator) {
        case "+":
            result = digitStorageA + digitStorageB;
            return result;
        case "-":
            result = digitStorageA - digitStorageB;
            return result;
        case "x":
            result = digitStorageA*digitStorageB;
            return result;
        case "/":
            result = digitStorageA/digitStorageB;
            return result;
        case "=":
            return result;
    }
    document.getElementById("test").innerHTML = result;
};

    const clearBtn = () => {
        document.getElementById("clear").addEventListener("click", function () {
        document.getElementById("test").innerHTML = "";
        testText = "";
        digitStorageA = null;
        digitStorageB = null;
        result = null;
        operator = null;
        isFraction = false;
        isOperated = false;
    })
};



