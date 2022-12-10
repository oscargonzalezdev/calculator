// global variables
let firstNumber = 0
let secondNumber = 0
let operator = null
let result = 0

// math operators
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    console.log(a, operator, b)
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 0;
    }
}

console.log(operate('+', 1, 2));  // Output: 3
console.log(operate('-', 3, 1));  // Output: 2
console.log(operate('*', 2, 3));  // Output: 6
console.log(operate('/', 6, 2));  // Output: 3


function clearDisplay() {
    document.getElementById("result").value = "";
    firstNumber = 0
    operator = null
    secondNumber = 0
}

function storeNumber(value) {
    const currentValue = document.getElementById("result").value += value;
    if (!operator) {
        firstNumber = currentValue
    } else {
        secondNumber += value
    }
}

function storeOperator(value) {
    document.getElementById("result").value += value;
    operator = value
}

function calculate() {
    result = operate(operator, Number(firstNumber), Number(secondNumber))
    document.getElementById("result").value = result
}
