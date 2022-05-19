// P -> a,b two integers negative or positive.
// R -> if params are different sum all in between else if params are equal return a or b
// E -> (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// P -> control flow (if, else if) to check if params are equal or not
//      get a loop to all numbers in between params
//      create an arr catcher  for the numbers
//      then reduce()

function getSum(a, b) {
    //Good luck!
    let catcher = []
    if (a == b) return a
    else if (a < b) {
        for (let i = a; i <= b; i++)
            catcher.push(i)
    } else {
        for (let i = a; i >= b; i--)
            catcher.push(i)
    }
    return catcher.reduce((a, b) => a + b, 0)
}