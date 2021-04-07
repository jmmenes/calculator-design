# Calculator from Design Spec

> You've been tasked with building a web calculator! Your company's designer has provided the following spec in PNG format.

## Tasks

Without diving into the Javascript that will give this calculator real brains, write the HTML / CSS that will display the calculator in the browser.

Create a new repository on GitHub, clone it to your computer, then create an `index.html` file and a `styles.css` file that will contain your code. You can reference previous assignments for the format of these files.

Once you are done, modify the settings of your repository on GitHub so that your `index.html` file will be hosted on GitHub pages. Set the "website" field of your repository to the GitHub pages URL.

## Notes

- Do your best to match the spec, but don't worry too much about getting it pixel perfect
- In the next assignment, we'll wire up the buttons behind this calculator

## Stretch goals

- Incorporate hover states to your buttons
- Bring in shadows
- Add a 'light mode / dark mode' switch to the page that switches the color theme. Do this with NO Javscript. Only HTML and CSS! (Hint: look into CSS selectors that can tell if a checkbox is checked or not)

## Design Spec

<img width="400px" src="https://i.imgur.com/XtKzEUD.png"/>

## &nbsp;

===========================================================================================================

## &nbsp;

# Wiring up the calculator

> In this assignment, we'll take the calculator that we built in the last assignment with HTML / CSS and add Javascript to make it actually work!

## Solution GIF

https://i.imgur.com/YpdPMem.mp4

## Steps

- Starting with the HTML / CSS you wrote, create an `main.js` file to hold your Javascript
- Import your `main.js` into your `index.html` using a `script` tag
- Wire up the calculator!

## Expected functionality

- The calculator can display at most two numbers and one operation on the screen at any time `i.e.: 2+3`
- If the equal button is pressed, the calculator will calculate the result of the expression and display on the screen
  - If the expression is incomplete (i.e.: no operation has been entered), nothing should happen
- If an operation is pressed but the calculator already has two numbers and an operation on the screen `i.e.: 2+3`, the current expression will be calculated before setting the new operation
- If an operation is pressed before any numbers are entered, nothing should happen
- If the clear button is pressed, the screen is cleared completely
- The dot button can be used to create decimal numbers

## One possible strategy

There are numerous approaches you can take to this problem! Feel free to find your own path, or if you're looking for inspiration, check out the functions laid out below.

```javascript
// One approach is to store our two numbers and one operation as strings so that
// we can easily add characters as the user presses buttons
let firstNumber = "";
let operation = "";
let secondNumber = "";

// Calculates the result of the current expression if it is valid, then displays the result on the screen
function calcResult() {
  // TODO
}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(op) {
  // TODO
}

// Handles when a number button is pressed
function numberPressed(number) {
  // TODO
}

// Clears the screen
function clearScreen() {
  // TODO
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
}

// TODO: write query selectors and add event listeners to the calculator's buttons
```
