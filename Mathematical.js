
// Example usage:
const inputExpression = "5 + 0 = 15";
evaluateExpression(inputExpression);
function evaluateExpression(expression) {

    var parts = expression.split(' ');
    var A = parseInt(parts[0]);
    var s = parts[1];
    var B = parseInt(parts[2]);
    var C = parseInt(parts[4]);
    
    // Evaluate the expression
    let result;
    switch (s) {
        case '+':
            result = A + B;
            break;
        case '-':
            result = A - B;
            break;
        case '*':
            result = A * B;
            break;
        default:
            return "Invalid try again";
    }

    // Check if the result matches C
    if (result == C) {
        console.log("Yes");
    } else {
        console.log(result);
    }
}


