function addBinary(a, b) {
    let sum = a + b
    console.log(sum.toString(2))
    return sum.toString(2)
}

function addBinary(a, b) {
    var sum = a + b,
        binary = '';

    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }

    return binary;
}