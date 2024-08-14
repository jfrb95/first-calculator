const GLOBAL = (function(){
    const upperDisplay = document.querySelector(".upper-display");
    const lowerDisplay = document.querySelector(".lower-display");
    const numberButtons = document.querySelector(".number-buttons");
    const operatorButtons = document.querySelector(".operator-buttons");
    const clearButton = document.querySelector(".clear");
    const equalsButton = document.querySelector(".equals");
    numberButtons.addEventListener("click", addToNumber);
    operatorButtons.addEventListener("click", toOperatorState);

    let state = defaultState();
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

    function toDefaultState() {
        state = defaultState();
    }

    function toEqualsState(event) {
        state = equalsPressedState(displayValue);
    }

    function toOperatorState(event) {
        switch (event.target.textContent) {
            case "+":
                operator = add;
                break;
            case "-":
                operator = subtract;
                break;
            case "*":
                operator = multiply;
                break;
            case "/":
                operator = divide;
                break;
            default:
                return new Error("Invalid Operator");
        }

        state = operatorPressedState(displayValue, operator);
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