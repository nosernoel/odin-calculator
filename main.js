const values = {
    firstNumber: null,
    secondNumber: null,
    operator: null,
}

const numberListe = document.querySelectorAll(".number");
const operatorListe = document.querySelectorAll(".operator")
const display = document.getElementById("display");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

let clearDisplay = false;

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        display.textContent = "Error :(";
        return "Error :(";
    }
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }

    else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    }

    else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    }

    else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

let currentStep = 1;

numberListe.forEach(numberButton => {
    numberButton.addEventListener("click", (event) => {
        if (clearDisplay === true) {
            display.textContent = "";
            clearDisplay = false;
        }

        if (event.target.textContent === "." && display.textContent.includes(".")) {
            return;
        }

        const clickedNumber = event.target.textContent;
        display.textContent += clickedNumber;
    });
});

operatorListe.forEach(operatorButton => {
    operatorButton.addEventListener("click", (event) => {
        if (clearDisplay === true && values.operator !== null) {
            values.operator = event.target.textContent;
            return;
        }

        if (values.firstNumber !== null && values.operator !== null) {
            values.secondNumber = Number(display.textContent);
            const result = operate(values.operator, values.firstNumber, values.secondNumber);
            const roundedResult = parseFloat(result.toFixed(5));

            display.textContent = roundedResult;

            values.firstNumber = roundedResult;
        } else {
            values.firstNumber = Number(display.textContent);

        }

        values.operator = event.target.textContent;
        clearDisplay = true;
    })
});


clear.addEventListener("click", () => {
    display.textContent = "";

    values.firstNumber = null;
    values.secondNumber = null;
    values.operator = null;
});

equals.addEventListener("click", (event) => {
    if (values.operator === null) {
        clearDisplay = true;
        return;
    }

    if (clearDisplay === true) {
        values.operator = null;
        return;
    }

    values.secondNumber = Number(display.textContent);
    const result = operate(values.operator, values.firstNumber, values.secondNumber);
    if (result === "Error :(") {
        display.textContent = result;
        values.firstNumber = null;
        values.secondNumber = null;
        values.operator = null;
        clearDisplay = true;
        return;
    }

    const roundedResult = parseFloat(result.toFixed(5));

    display.textContent = roundedResult;

    values.operator = null;
    values.firstNumber = roundedResult;

    clearDisplay = true;
});

backspace.addEventListener("click", (event) => {
    display.textContent = display.textContent.slice(0, -1);
});

window.addEventListener("keydown", (event) => {
    const key = event.key;

    if ((key >= "0" && key <= "9" || key === ".")) {
        numberListe.forEach(button => {
            if (button.textContent === key) {
                button.click();
            }
        });
    }

    if ((key === "+" || key === "-" || key === "*" || key === "/")) {
        operatorListe.forEach(button => {
            if (button.textContent === key) {
                button.click();
            }
        });
    }

    if ((key === "Enter" || key === "=")) {
        event.preventDefault();
        equals.click();
    }

    if (key === "Escape") {
        clear.click();
    }

    if (key === "Backspace") {
        backspace.click();
    }
});