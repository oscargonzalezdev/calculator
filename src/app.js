// global variables
let firstNumber = ''
let secondNumber = ''
let operator = ''
let result = ''
let previousResult = ''

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
    if (operator === "/" && b === 0) {
        return "ERROR"
    }
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

function clearDisplay() {
    document.getElementById("result").value = ''
    firstNumber = ''
    operator = ''
    secondNumber = ''
    previousResult = ''
}

function storeNumber(value) {
    const currentValue = document.getElementById("result").value += value
    if (operator === '') {
        firstNumber = currentValue
    } else {
        secondNumber += value
    }
}

function storeOperator(value) {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        previousResult = operate(operator, Number(firstNumber), Number(secondNumber))
        document.getElementById("result").value = previousResult
        document.getElementById("result").value += value
        firstNumber = previousResult
        operator = value
        secondNumber = ''
    } else if (firstNumber === '') {
        firstNumber = 0
        operator = value
        document.getElementById("result").value = 0;
        document.getElementById("result").value += value;
    } else {
        operator = value
        document.getElementById("result").value += value;
    }
}

function calculate() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        result = operate(operator, Number(firstNumber), Number(secondNumber))
        document.getElementById("result").value = result
        firstNumber = result
        operator = ''
        secondNumber = ''
    }
}