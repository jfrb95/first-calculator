const GLOBAL = (function(){
    const display = document.querySelector(".display");
    const buttons = document.querySelector(".buttons");
    
    let displayValue = "0";
    
    const defaultState = function() {
        const num1 = "0";
        const num2 = "0";
        const operator = null;
        const state = 1;

        return {//getters
            getNum1() {
                return num1
            },
            
            getNum2() {
                return num2
            },

            getOperator() {
                return operator
            },

            getState() {
                return state
            },
        }
    }
    
    const operatorPressedState = function(num, operator) {
        const num1 = num;
        const num2 = "0";
        const operator = operator;
        const state = 2;

        return {//getters
            getNum1() {
                return num1
            },
            
            getNum2() {
                return num2
            },

            getOperator() {
                return operator
            },

            getState() {
                return state
            },
        }
    }

    const equalsPressedState = function(num) {
        const num1 = num;
        const num2 = "0";
        const operator = null;
        const state = 3;

        return {//getters
            getNum1() {
                return num1
            },
            
            getNum2() {
                return num2
            },

            getOperator() {
                return operator
            },

            getState() {
                return state
            },
        }
    }


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
        updateDisplayValue()
    }

    function setDisplay(str) {
        display.textContent = str;
        updateDisplayValue()
    }


    return {}
}());