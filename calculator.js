const GLOBAL = (function(){

    const upperDisplay = document.querySelector(".upper-display");
    const lowerDisplay = document.querySelector(".lower-display");
    const numberButtons = document.querySelector(".number-buttons");
    const operatorButtons = document.querySelector(".operator-buttons");
    const clearButton = document.querySelector(".clear");
    const equalsButton = document.querySelector(".equals");
    numberButtons.addEventListener("click", addToNumberListenerFunction);


    //state 1:
    // click number to add digits to num1
    // click operator to switch to state 2
    // click equals and no change happens
    // click clear to reset num1

    function state1() {
        let num1 = "0";
        let num2 = "0";
        let operator = null;
        const state = 1;

        return {
            onNumberPress(str) {
                num1 = num1.concat(str);
                lowerDisplayValue = num1;
                lowerDisplay.textContent = lowerDisplayValue;
            },

            onOperatorPress() {
                state = state2(/*FILL IN*/)
            },

            onEqualsPress() {

            },

            onClearPress() {

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

    //state 3
    // num1 is result of equals
    // click number to clear num1 and begin new num1
    // click operator to use current num1 and go to state 2
    // click equals nothing happens
    // click clear to go to state 1

    let state = state1();
    let lowerDisplayValue = "0";
    let upperDisplayValue = "";

    //listener functions

    function addToNumberListenerFunction(event) {
        if (event.target.classList.contains(number)) {
            state.onNumberPress(event.target.textContent);
        }
    }


    //operation functions

    function add(num1, num2) {return Number(num1) + Number(num2)}

    function subtract(num1, num2) {return Number(num1) - Number(num2)}

    function multiply(num1, num2) {return Number(num1) * Number(num2)}

    function divide(num1, num2) {return Number(num1) / Number(num2)}

    return {}
}());