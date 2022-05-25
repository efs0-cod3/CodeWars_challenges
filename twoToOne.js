// first solution 

// P - two strgs
// R - one str removing duplcates and sorted
// E - a = "xyaabbbccccdefww"
//     b = "xxxxyyyyabklmopq"
//     return = "abcdefklmopqwxy"
// P - set a empty arr (catcher)
//     concat strs and split in new arr (tog)
//     use loop to go through arr and check if empty arr includes elem in new arr
//     push elem not in arr, sort() and join('')

function longest(s1, s2) {
    // your code
    let catcher = []
    let tog = s1.concat(s2).split('')
    for (let i = 0; i < tog.length; i++) {
        if (!catcher.includes(tog[i])) {
            catcher.push(tog[i])
        }
    }
    return catcher.sort().join('')
}
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"



// second solution

// P - two strgs
// R - one str removing duplcates and sorted
// E - a = "xyaabbbccccdefww"
//     b = "xxxxyyyyabklmopq"
//     return = "abcdefklmopqwxy"
// P - concat strs and split in new arr (tog)
//     spread a new Set (obj) to get unique values
//     sort and join.
function longest(s1, s2) {
    // your code
    let tog = s1.concat(s2).split('')
    let unq = [...new Set(tog)]
    return unq.sort().join('');

}