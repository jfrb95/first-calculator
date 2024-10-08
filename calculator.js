const GLOBAL = (function(){
    const log = console.log;

    const upperDisplay = document.querySelector(".upper-display");
    const lowerDisplay = document.querySelector(".lower-display");
    const numberButtons = document.querySelector(".number-buttons");
    const operatorButtons = document.querySelector(".operator-buttons");
    const clearButton = document.querySelector(".clear");
    const equalsButton = document.querySelector(".equals");
    numberButtons.addEventListener("click", numberListenerFunction);
    operatorButtons.addEventListener("click", operatorListenerFunction);
    clearButton.addEventListener("click", clearListenerFunction);
    equalsButton.addEventListener("click", equalsListenerFunction);

    //state 1:
    // click number to add digits to num1
    // click operator to switch to state 2
    // click equals and no change happens
    // click clear to reset num1

    function state1(num) {
        let num1 = num;
        const num2 = "0";
        const operator = null;
        const stateId = 1;

        return {
            onNumberPress(str) {
                if (num1 === "0") {
                    num1 = str;
                } else {
                    num1 = num1.concat(str);
                }
                setLowerDisplayValue(num1);
                setLowerDisplay(lowerDisplayValue);
            },

            onOperatorPress(op) {
                setLowerDisplayValue("0");
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(`${num1} ${getOperatorSymbol(op)}`);
                setUpperDisplay(upperDisplayValue);
                state = state2(num1, op);
            },

            onEqualsPress() {
            },

            onClearPress() {
                setLowerDisplayValue("0");
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(" ");
                setUpperDisplay(upperDisplayValue);
                state = state1("0");
            },
        }
    }

    //state 2: 
    // click number to add digits to num2
    // operator is stored from previous state
    // click operator to call operate() on previously stored operator
    //     , print result to bottom display, and reset state 2 with the 
    //     result as num1 and the clicked operator as the operator
    // click equals to go to state 3
    // click clear to go to state 1

    function state2(num, op) {
        const num1 = num;
        let num2 = "0";
        const operator = op;
        const stateId = 2;

        return {
            onNumberPress(str) {
                if (num2 === "0") {
                    num2 = str;
                } else {
                    num2 = num2.concat(str);
                }
                setLowerDisplayValue(num2);
                setLowerDisplay(lowerDisplayValue);
            },

            onOperatorPress(op) {
                const result = operate(num1, num2, operator);
                if (result) {
                    setLowerDisplayValue(result);
                    setLowerDisplay(lowerDisplayValue);
                    setUpperDisplayValue(`${result} ${getOperatorSymbol(op)}`)
                    setUpperDisplay(upperDisplayValue);
                    state = state2(result, op);
                } else {
                    state = state1("0");
                }
            },

            onEqualsPress() {
                const result = operate(num1, num2, operator);
                if (result) {
                    setLowerDisplayValue(result);
                    setLowerDisplay(lowerDisplayValue);
                    setUpperDisplayValue(`${num1} ${getOperatorSymbol(operator)} ${num2} = `)
                    setUpperDisplay(upperDisplayValue);
                    state = state3(result);
                } else {
                    state = state1("0");
                }
            },

            onClearPress() {
                setLowerDisplayValue("0");
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(" ");
                setUpperDisplay(upperDisplayValue);
                state = state1("0");
            },
        }
    }

    //state 3
    // num1 is result of equals
    // click number to clear num1 and begin new num1
    // click operator to use current num1 and go to state 2
    // click equals nothing happens
    // click clear to go to state 1

    function state3(num) {
        const num1 = num;
        let num2 = "0";
        let operator = null;
        const stateId = 3;

        return {
            onNumberPress(str) {
                state = state1(str);
                setLowerDisplayValue(str);
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(" ");
                setUpperDisplay(upperDisplayValue);
            },

            onOperatorPress(op) {

                setLowerDisplayValue("0");
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(`${num1} ${getOperatorSymbol(op)}`);
                setUpperDisplay(upperDisplayValue);
                state = state2(num1, op);
            },

            onEqualsPress() {
            },

            onClearPress() {
                setLowerDisplayValue("0");
                setLowerDisplay(lowerDisplayValue);
                setUpperDisplayValue(" ");
                setUpperDisplay(upperDisplayValue);
                state = state1("0");
            },
        }
    }


    function operate(num1, num2, op) {
        return op(num1, num2);
    }

    //initial variables

    
    let lowerDisplayValue = "0";
    setLowerDisplay(lowerDisplayValue);
    let upperDisplayValue = " ";
    setUpperDisplayValue(upperDisplayValue);
    let state = state1("0");


    //listener functions

    function numberListenerFunction(event) {
        if (event.target.classList.contains("number")) {
            state.onNumberPress(event.target.textContent);
        }
    }

    function operatorListenerFunction(event) {
        if (event.target.classList.contains("operator")) {
            let op;
            switch (event.target.textContent) {
                case "+":
                    op = add;
                    break;
                case "-":
                    op = subtract;
                    break;
                case "x":
                    op = multiply;
                    break;
                case "/":
                    op = divide;
                    break;
                default:
                    return new Error("Invalid Operator");
            }

            state.onOperatorPress(op);
        }
    }

    function equalsListenerFunction(event) {
        state.onEqualsPress();
    }

    function clearListenerFunction(event) {
        state.onClearPress();
    }

    //display value functions
    function setLowerDisplayValue(str) {
        lowerDisplayValue = str;
    }

    function setLowerDisplay(str) {
        lowerDisplay.textContent = str;
    }

    function setUpperDisplayValue(str) {
        upperDisplayValue = str;
    }

    function setUpperDisplay(str) {
        upperDisplay.textContent = str;
    }

    function getOperatorSymbol(op) {
        let result;
        switch (op) {
            case add:
                result = "+";
                break;
            case subtract:
                result = "-";
                break;
            case multiply:
                result = "x";
                break;
            case divide:
                result = "/";
                break;
            default:
                return new Error("Invalid operator");
        }
        return result;
    }

    //operation functions

    function add(num1, num2) {return Number(num1) + Number(num2)}

    function subtract(num1, num2) {return Number(num1) - Number(num2)}

    function multiply(num1, num2) {return Number(num1) * Number(num2)}

    function divide(num1, num2) {
        if (num2 === "0") {
            setUpperDisplayValue("Cannot divide by zero");
            setUpperDisplay(upperDisplayValue);
            setLowerDisplayValue("0");
            setLowerDisplay(lowerDisplayValue);
            return false
        } else {
            return Number(num1) / Number(num2)}
        }

    return {}
}());