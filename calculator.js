// scripts.js
let displayValue = '';
let currentOperator = null;
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else {
        calculate();
        firstOperand = parseFloat(displayValue);
    }
    currentOperator = operator;
    displayValue = '';
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    currentOperator = null;
    firstOperand = null;
    updateDisplay();
}

function calculate() {
    if (currentOperator === null || displayValue === '') return;
    let secondOperand = parseFloat(displayValue);
    switch (currentOperator) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand === 0) {
                displayValue = 'Error';
            } else {
                displayValue = (firstOperand / secondOperand).toString();
            }
            break;
    }
    currentOperator = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue === '' ? '0' : displayValue;
}
