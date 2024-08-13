const GLOBAL = (function(){
    const display = document.querySelector(".display");
    let num1 = 0;
    let num2 = 0;
    let operator;
    let displayValue = 0;

    function add(num1, num2) {return num1 + num2}

    function subtract(num1, num2) {return num1 - num2}

    function multiply(num1, num2) {return num1 * num2}

    function divide(num1, num2) {return num1 / num2}

    function updateDisplayValue() {
        displayValue = display.textContent;
    }

    function updateDisplay(str) {
        const text = document.createTextNode(str);
        display.appendChild(text);
    }

    function enterDigit(str) {
        updateDisplay(str);
        updateDisplayValue();
    }

    return {}
}());