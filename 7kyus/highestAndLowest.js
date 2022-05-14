// P strig of numbers
// R str with the higher and lowest num
// E highAndLow("1 2 3 4 5");  // return "5 1"
// P split into arr
//   the search for the max and min Math.max - Math.min
//    return result in  with a space between str


function highAndLow(numbers){
    // ...
   numbers = numbers.split(' ')
  let  result = Math.max(...numbers) + ' ' + Math.min(...numbers)
  return result
    
  }