// Calculator Program

const screen = document.getElementById("screen");

function appendtodisplay(value) {
    screen.value += value;
}

function clearDisplay() {
    screen.value = "";
}

function calculate() {
    try {
        let result = evaluateExpression(screen.value);

        // ADDED: Round to 10 decimal places and remove unnecessary zeros
        screen.value = parseFloat(result.toFixed(10));

    } catch (error) {
        screen.value = "Error";
    }
}

// ===============================
// BODMAS Expression Evaluator
// ===============================

function evaluateExpression(expression) {

    // Remove spaces
    expression = expression.replace(/\s+/g, "");

    // Handle brackets first
    while (expression.includes("(")) {

        let open = expression.lastIndexOf("(");
        let close = expression.indexOf(")", open);

        if (close === -1) {
            throw "Missing bracket";
        }

        let inside = expression.substring(open + 1, close);
        let result = evaluateSimple(inside);

        expression =
            expression.substring(0, open) +
            result +
            expression.substring(close + 1);
    }

    return evaluateSimple(expression);
}

// Evaluates expressions without brackets
function evaluateSimple(expression) {

    // MODIFIED: Better regex for decimal numbers
    let tokens = expression.match(/(\d*\.?\d+|[+\-*/])/g);

    if (!tokens) {
        throw "Invalid expression";
    }

    // ====================================================
    // ADDED: Handle negative numbers (Unary Minus)
    // ====================================================
    for (let i = 0; i < tokens.length; i++) {

        if (
            tokens[i] === "-" &&
            (i === 0 || ["+", "-", "*", "/"].includes(tokens[i - 1]))
        ) {

            let negativeNumber = (-parseFloat(tokens[i + 1])).toString();

            tokens.splice(i, 2, negativeNumber);
        }
    }

    // -----------------------
    // Division and Multiplication
    // -----------------------

    let i = 0;

    while (i < tokens.length) {

        if (tokens[i] === "*" || tokens[i] === "/") {

            let left = parseFloat(tokens[i - 1]);
            let right = parseFloat(tokens[i + 1]);

            let result;

            if (tokens[i] === "*") {
                result = left * right;
            } else {
                result = left / right;
            }

            tokens.splice(i - 1, 3, result.toString());

            i = 0;

        } else {
            i++;
        }
    }

    // -----------------------
    // Addition and Subtraction
    // -----------------------

    let answer = parseFloat(tokens[0]);

    i = 1;

    while (i < tokens.length) {

        let operator = tokens[i];
        let number = parseFloat(tokens[i + 1]);

        if (operator === "+") {
            answer += number;
        }

        else if (operator === "-") {
            answer -= number;
        }

        i += 2;
    }

    return answer;
}