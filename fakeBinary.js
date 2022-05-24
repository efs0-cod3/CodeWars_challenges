// my solutions
// P - a str of num
// R - str of num where each num < 5 will be = 0 else 1
// E - '17823' -> '01100'
// P - split the str into arr
//     loop throw arr for each
//     math.abs each el  and compare values
//     += to str each outcome from the forEach

function fakeBin(x) {
    let xs = x.split('')
    let resultingStr = '';
    xs.forEach(el => {
        Math.abs(el) >= 5 ? resultingStr += 1 : resultingStr += 0
    })
    return resultingStr
}
//  my other
function fakeBin(x) {
    let xs = x.split('')
    let resultingStr = []
    xs.forEach(el => {
        Math.abs(el) >= 5 ? resultingStr.push(1) : resultingStr.push(0)
    })
    return resultingStr.join('')

}

// codeWars
function fakeBin(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        Number(str[i]) >= 5 ? newStr += 1 : newStr += 0;
    }
    return newStr;
}