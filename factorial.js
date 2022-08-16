// prep
// p => number
// r => factorial of that number
// e => 4 => 24
// pseudo code:

function factorial(n){
    //your code here
    let catcher = []
    let result = 0
  
  if(n == 0){ //if n = 0 result equal 1
    result = 1
  } else {
   for(let i = 1; i <= n; i++){ // loop for each number and push it to arr
     catcher.push(i)
   }
    result = catcher.reduce((a,b) => a*b,1) //reduce de numbers starting from 1
  }
  
  return result 
    }