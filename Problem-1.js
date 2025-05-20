function Calculate(a, b, operation) {

    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)) {
        return "Provide correct values"
    }

    switch (operation) {
        case 'add':
            return numA + numB
        case 'subtract':
            return numA - numB
        case 'multiply':
            return numA * numB
        case 'divide':
            if (numB === 0) {
                return "Error: Division by zero is not allowed.";
            }
            return numA / numB;
        default:
            return `Error: Invalid operation type '${operationType}'. Supported types are 'add', 'subtract', 'multiply', 'divide'.`;

    }

}




// Example 1: Addition
const resultAdd = Calculate(10.5, 5.2, 'add');
console.log(`10.5 + 5.2 = ${resultAdd}`);

// Example 2: Subtraction
const resultSubtract = Calculate(20.0, 7.5, 'subtract');
console.log(`20.0 - 7.5 = ${resultSubtract}`);

// Example 3: Multiplication
const resultMultiply = Calculate(4.0, 2.5, 'multiply');
console.log(`4.0 * 2.5 = ${resultMultiply}`);

// Example 4: Division
const resultDivide = Calculate(100.0, 4.0, 'divide');
console.log(`100.0 / 4.0 = ${resultDivide}`);

// Example 5: Division by Zero
const resultZeroDivide = Calculate(5.0, 0, 'divide');
console.log(`5.0 / 0 = ${resultZeroDivide}`); 