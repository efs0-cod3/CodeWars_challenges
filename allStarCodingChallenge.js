// 100devs!
function strCount(str, letter){  
    //code here
  //   counter
    let occurrence = 0
  //   loop
    for(let i = 0; i < str.length; i++){
  //     conditionals
      if(str[i] == letter){
        occurrence++
      }
    }
    return occurrence
  }
  //   prep
  //   Parameter => one word and a letter
  //   Returns => to check for occurrence of the second in the first and get result in *number*!
  //   Rxamples => ("Hello", "o")  ==>  1 | ("Hello", "l")  ==>  2
  //   Pseudo code => a loop to go through the str and to compare the params
  //                  conditionals
  //                  I need a counter for the occurrences