//calculate program
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
