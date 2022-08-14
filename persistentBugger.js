// prep
// p => a num
// r => numbers of times you have to multiply those numbers to get a single number
// e => 39 => 3*9 = 27 => 2*7 = 14 => 1*4 => 4... had to multiply 3 times
// p => pseudo code

function persistence(num) {
    //code me
   let count = 0  // set up a counter
     while(num >= 10){ // use a while loop set that if num >= 10 keep looping
     num = num.toString().split('') //convert num into string and split into arr
     num = num.reduce((a,b) => a*b) // reduce  the numbers
     count++ // increase counter by one each loop
     }
   return count
 }