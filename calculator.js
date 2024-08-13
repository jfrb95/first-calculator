const GLOBAL = (function(){
    const upperDisplay = document.querySelector(".upper-display");
    const lowerDisplay = document.querySelector(".lower-display");
    const numberButtons = document.querySelector(".number-buttons");
    numberButtons.addEventListener("click", addToNumber);

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
    
    const operatorPressedState = function(num, op) {
        const num1 = num;
        const num2 = "0";
        const operator = op;
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

    function addToNumber(event) {
        const num = event.target.textContent;
        if (displayValue === "0") {
            displayValue = num;
        } else {
            displayValue = displayValue.concat(num);
        }
    }

    function updateLowerDisplay(str) {
        lowerDisplay.textContent = str;
    }

    function add(num1, num2) {return num1 + num2}

    function subtract(num1, num2) {return num1 - num2}

    function multiply(num1, num2) {return num1 * num2}

    function divide(num1, num2) {return num1 / num2}

    return {}
}());