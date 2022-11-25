"use strict";
function noOdds(values) {
    // Return all non-odd values
    return values.filter(function (num) { return num % 2 === 0; });
}

console.log(noOdds([0, 1, 2, 3, 4, 5]));
