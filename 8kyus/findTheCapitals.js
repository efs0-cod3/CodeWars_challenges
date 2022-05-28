// p - str
// r - index of elem in uppercase
// e - 'CodEWaRs' => [ 0, 3, 4, 6 ]
// p - split str into arr
//   - create var to catch index
//   - apply filter method to verify which are in uppercase and push the index of elem to the catcher
//   - return catcher

var capitals = function (word) {
    // Write your code here
    word = word.split('')
    let catcher = []
    word.filter((l, i) => {
        if (l == l.toUpperCase()) {
            catcher.push(i)
        }
    })
    return catcher
};