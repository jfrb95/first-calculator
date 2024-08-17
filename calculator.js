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

    //state 1:
    // click number to add digits to num1
    // click operator to switch to state 2
    // click equals and no change happens
    // click clear to reset num1

    function state1() {
        let num1 = "0";
        const num2 = "0";
        const operator = null;
        const stateId = 1;

        return {
            onNumberPress(str) {
                log("State1 number pressed");
                num1 = num1.concat(str);
                lowerDisplayValue = num1;
                lowerDisplay.textContent = lowerDisplayValue;
            },

            onOperatorPress(op) {
                log("State1 operator pressed");
                state = state2(num1, op);
            },

            onEqualsPress() {
                log("State1 equals pressed");
            },

            onClearPress() {
                log("State1 clear pressed");
                state = state1();
            },
        }
    }

    //state 2: 
    // click number to add digits to num2
    // operator is stored from previous state
    // click operator to call operate() on previously stored operator
    //     , print result to top display, and reset state 2 with the 
    //     result as num1 and the clicked operator as the operator
    // click equals to go to state 3
    // click clear to go to state 1

    function state2(num, op) {
        let num1 = num;
        let num2 = "0";
        let operator = op;
        const stateId = 2;

        return {
            onNumberPress() {

            },

            onOperatorPress() {

            },

            onEqualsPress() {

            },

            onClearPress() {

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
        let num1 = num;
        let num2 = "0";
        let operator = null;
        const stateId = 3;

        return {
            onNumberPress() {

            },

            onOperatorPress() {

            },

            onEqualsPress() {

            },

            onClearPress() {

            },
        }
    }

    //initial variables

    let state = state1();
    let lowerDisplayValue = "0";
    let upperDisplayValue = "";

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

            onOperatorPress(op);
        }
    }


    //operation functions

    function add(num1, num2) {return Number(num1) + Number(num2)}

    function subtract(num1, num2) {return Number(num1) - Number(num2)}

    function multiply(num1, num2) {return Number(num1) * Number(num2)}

    function divide(num1, num2) {return Number(num1) / Number(num2)}

    return {}
}());