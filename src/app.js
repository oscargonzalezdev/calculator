// global variables
const operators = ['+', '-', '*', '/']
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

function handleNumber(number) {
    result = document.getElementById("result").value
    // avoid repeating points and zeros
    if (
        number === '.' && result.includes('.', result.length - 1) ||
        number === '.' && result == '' ||
        number === '.' && secondNumber == '' && firstNumber.includes('.') ||
        number === '.' && secondNumber.includes('.') ||
        number === '.' && operators.includes(result.charAt(result.length - 1)) ||
        number === '0' && result.length === 1 && result.charAt(result.length - 1) === '0'
    ) {
        return
    } else {
        result += number
        document.getElementById("result").value = result
        if (operator === '') {
            firstNumber = result
        } else {
            secondNumber += number
        }
    }
}

function handleOperator(value) {
    result = document.getElementById("result").value
    if (result !== '') {
        if (operators.includes(result.charAt(result.length - 1))) {
            result = result.slice(0, -1)
            document.getElementById("result").value = result
        }
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            previousResult = operate(operator, Number(firstNumber), Number(secondNumber)).toString()
            document.getElementById("result").value = previousResult
            document.getElementById("result").value += value
            firstNumber = previousResult
            operator = value
            secondNumber = ''
        } else {
            operator = value
            document.getElementById("result").value += value;
        }
    }
}

function calculate() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        result = operate(operator, Number(firstNumber), Number(secondNumber)).toString()
        document.getElementById("result").value = result
        firstNumber = result
        operator = ''
        secondNumber = ''
    }
}

function clearDisplay() {
    document.getElementById("result").value = ''
    firstNumber = ''
    secondNumber = ''
    operator = ''
    result = ''
    previousResult = ''
}