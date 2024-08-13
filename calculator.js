const GLOBAL = (function(){
    const display = document.querySelector(".display");
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", changeVariable);
    let num1 = "";
    let num2 = "";
    let operator = null;
    let displayValue = 0;

    function changeVariable(event) {
        const target = event.target;
        if (target.classList.contains("number")) {
            if (!operator) {
                addCharToNum1(target.textContent);
            } else {
                addCharToNum2(target.textContent);
            }
            console.log("num1:", num1, "num2:", num2);
        } else if (target.classList.contains("operator")) {
            
            switch (target.textContent) {
                case "+":
                    operator = add;
                    console.log("add");
                    break;
                case "-":
                    operator = subtract;
                    console.log("subtract");
                    break;
                case "x":
                    operator = multiply;
                    console.log("multiply");
                    break;
                case "/":
                    operator = divide;
                    console.log("divide");
                    break;
                default:
                    return new Error("Invalid operator");
            }

        }
    }


    function operate() {
        if (operator) {
            operator(Number(num1), Number(num2));
        }
    }

    function setOperator(f) {
        operator = f;
    }

    function addCharToNum1(num) {num1 = num1.concat(num);}

    function addCharToNum2(num) {num2 = num2.concat(num);}


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

    function populateDisplay(str) {
        display.textContent = str;
        updateDisplayValue()
    }


    return {}
}());