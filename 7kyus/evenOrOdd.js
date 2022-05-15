// P -> Array
// R -> str odd or even
// E -> Input: [0, -1, -5] Output: "even"
// P -> We need to reduce the value or to sum each number into the arr (.return() return a single value)
//      then compare it if it's even or Odd % 2

function oddOrEven(array) {
    //enter code here
    let number = array.reduce((a, b) => a + b, 0)
    return number % 2 == 0 ? 'even' : 'odd'
}