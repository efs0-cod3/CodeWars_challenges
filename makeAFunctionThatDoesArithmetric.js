// P -> a,b and operation
// R -> result of the operation
// E -> 5, 2, "add"      --> 7
// P -> switch statement to 'switch' on operator case

function arithmetic(a, b, operator) {
    //your code here!
    switch (operator) {
        case 'add':
            return a + b
            break;
        case 'subtract':
            return a - b
            break;
        case 'multiply':
            return a * b
            break;
        case 'divide':
            return a / b
            break;
    }
}