// Tester manuellement chacune de ses fonctions puis automatiser les tests unitaires avec Jest

// Function 1: Add two numbers
function add(a, b) {
    return a + b;
}

// Function 2: Subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function 3: Multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function 4: Divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Function 5: Check if a number is even
function isEven(num) {
    return num % 2 === 0;
}

// Function 6: Find the maximum of two numbers
function max(a, b) {
    return a > b ? a : b;
}

// Function 7: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    isEven,
    max,
    reverseString
}