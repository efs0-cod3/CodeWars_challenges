function findMultiples(integer, limit) {
    //your code here
  //    get a catcher
    const result = []
  //   set up a loop to get to the limit number starting from 1
    for(let i = 1; i <= limit; i++){
  //     if the result of integer plus i <= limit push that to result
      if(integer * i <= limit) result.push(integer*i) 
    }
    return result
  }