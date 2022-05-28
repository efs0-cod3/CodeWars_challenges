// P - str
// R - ocurrence of each letter on str
// E - 'aba' => {a:2, b:1}
// P - split str in arr
// 		 reduce element and count if elem has apeared previously
function count(str) {
    // The function code should be here
    return str.split('').reduce((acc, cur) => {
        return acc[cur] ? ++acc[cur] : acc[cur] = 1, acc
    }, {})
}
console.log(count('aba'))


//  other ways

function count(string) {
    return string.split("").reduce(function (obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}
console.log(count('abab'))


function count(string) {
    let result = {};
    for (let i = 0; i < string.length; i++) {
        if (result.hasOwnProperty(string[i])) {
            result[string[i]]++;
        } else {
            result[string[i]] = 1;
        }
    }

    return result;
}
console.log(count('abab'))