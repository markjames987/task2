/*  calculator program

const screen = document.getElementById("screen");

function appendtodisplay(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
    
}

function that returns factorial
function factorialNum(num) {
    if (num < 0) return NaN;

    let result = 1;
    for (let i = 1; i <= num; i++) {
           result *= i;
    }
    return result;
}

Factorial button
function factorial() {
    let num = parseInt(screen.value);

    if (isNaN(num) || num < 0) {
        screen.value = "!";
        return;
    }

    screen.value = factorialNum(num);
}

function combination() {
 let input = screen.value.trim();   // get what’s typed on screen
  let parts = input.split(",");      // split into n and r

  if (parts.length !== 2) {
    screen.value = "c";
   return;
  }

 let n = parseInt(parts[0]);
  let r = parseInt(parts[1]);

   validate input
  if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
    screen.value = "Error";
  / return; }

   compute nCr
 // let result = factorialNum(n) / (factorialNum(r) * factorialNum(n - r));
 // screen.value = result;
function factorial(num) {
    if (num=== 0 || num === 1)
return 1;
    let result =1;
    for(let i = 2; i<= num; i++){
        result *= i;
    }
    return result;

}

function combination(n, r) {

    let anwser;

  return factorial(n) /
(factorial(r) * factorial (n - r));

  return anwser;

}*/
const screen = document.getElementById("screen");

// Display numbers/operators
function appendtodisplay(value) {
    screen.value += value;
}

// Clear the display
function clearDisplay() {
    screen.value = "";
}

// Basic calculator
function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

// Factorial
function factorial(num) {
    if (num < 0) return NaN;

    if (num === 0 || num === 1)
        return 1;

    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

// Combination (nCr)
function combination(n, r) {
    if (r > n || r < 0 || n < 0)
        return "Error";

    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Calculate Combination
// Enter like: 5,2
function calculateCombination() {
    let input = screen.value.split(",");

    if (input.length !== 2) {
        screen.value = "Use n,r";
        return;
    }

    let n = parseInt(input[0]);
    let r = parseInt(input[1]);

    screen.value = combination(n, r);
}

// Solve Linear Equation
// Equation: ax - b = c
// Enter values as: a,b,c
// Example: 2,4,10
function solveLinearEquation() {

    let input = screen.value.split(",");

    if (input.length !== 3) {
        screen.value = "Use a,b,c";
        return;
    }

    let a = parseFloat(input[0]);
    let b = parseFloat(input[1]);
    let c = parseFloat(input[2]);

    if (a === 0) {
        screen.value = "No Solution";
        return;
    }

    let x = (c + b) / a;

    screen.value = "x = " + x;
}