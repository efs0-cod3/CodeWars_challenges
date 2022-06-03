// P - Number
// R - number roundend to the 5 next number
// E - 3 => 5 || -3 => 0
// P - check if n is % 5 if is return n
//     if n is less than 0 n minus the result of n%5 
//     if n is more than 0 n minus the result of n%5 + 5

function roundToNext5(n) {
    // ...
    return n % 5 === 0 ? n : (n < 0 ? n - (n % 5) : n - (n % 5) + 5)
}
console.log(roundToNext5(11));