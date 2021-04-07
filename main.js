// One approach is to store our two numbers and one operation as strings so that
// we can easily add characters as the user presses buttons
let firstNumber = "";
let operation = "";
let secondNumber = "";
let periodKey = false;

// Query Selection
// Get all the number elements
const numbers = document.querySelectorAll(".num");
// Get the display input
const screen = document.querySelector("#display-input");
// Get all the following function buttons
const adding = document.querySelector(".add");
const subtracting = document.querySelector(".subtract");
const multiplying = document.querySelector(".multiply");
const dividing = document.querySelector(".divide");
const equals = document.querySelector("#equal-button");
const clear = document.querySelector(".clear");

// TODO: write query selectors and add event listeners to the calculator's buttons
for (const button of numbers) {
  button.addEventListener("click", numberPressed);
}

adding.addEventListener("click", operationPressed);

subtracting.addEventListener("click", operationPressed);

multiplying.addEventListener("click", operationPressed);

dividing.addEventListener("click", operationPressed);

clear.addEventListener("click", clearScreen);

equals.addEventListener("click", updateScreen);

adding.addEventListener("click", updateScreen);

subtracting.addEventListener("click", updateScreen);

multiplying.addEventListener("click", updateScreen);

dividing.addEventListener("click", updateScreen);

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(op) {
  if (!firstNumber) {
    return undefined;
  }
  if (operation) {
    return undefined;
  }
  operation += op.target.innerText;
  screen.innerText = firstNumber + operation;
}

// Handles when a number button is pressed
function numberPressed(number) {
  console.log(number);
  if (number.target.innerText === "." && !periodKey) {
    periodKey = true;
  } else if (number.target.innerText === "." && periodKey) {
    return undefined;
  }
  if (operation === "") {
    firstNumber += number.target.innerText;
    screen.innerText = firstNumber + operation;
  } else {
    secondNumber += number.target.innerText;
    screen.innerText = firstNumber + operation + secondNumber;
  }
}

// Clears the screen
function clearScreen() {
  screen.textContent = "";
  firstNumber = "";
  operation = "";
  secondNumber = "";
  periodKey = false;
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  let expression = screen.textContent;
  screen.textContent = eval(expression);
}
