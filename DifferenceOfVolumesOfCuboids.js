function findDifference(a, b) {
    //loading...
    a = a.reduce((acc, curr) => acc * curr)
    b = b.reduce((acc, curr) => acc * curr)
    
    return a > b ? a - b : b - a

}
findDifference([3, 2, 5], [1, 4, 4])

//   one liner
// function findDifference(a, b) {
//     loading...
//     return Math.abs(a.reduce((acc, curr) => acc * curr)-b.reduce((acc, curr) => acc * curr))
// }