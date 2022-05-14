// P array of "sheeps" true, false, undefined, null
// R number of true
// E [true, true] = 2
// P filter to separate true from the others
//   check the length of this 'new' array

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let arrOfTrue = arrayOfSheep.filter(l => l == true)
    return arrOfTrue.length
  }