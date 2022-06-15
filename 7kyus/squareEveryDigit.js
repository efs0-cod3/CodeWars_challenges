// P - number
// R - each number sqr
// E - 123 = 149
// p - convert num into str and split into arr
//     map to loop throw each num and sqr it
//     wrap map into NUMBER and join the result 

function squareDigits(num){
    num = num.toString().split('')
   return Number(num.map(n => Number(n)**2 ).join(''))
   }