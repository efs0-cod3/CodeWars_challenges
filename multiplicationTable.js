multiplicationTable = function(size) {
    // insert code here
     let result = [] //base arr
   
     for(let i = 0; i < size; i++){
       const t = [] //nested arr
       for(let j = 0; j < size; j++)
         t.push((i+1)*(j+1))  //push to neted arr
         result.push(t) // push nested arr to arr
     }
     return result  
   }