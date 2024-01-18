reverse = function(array) {
    // TODO: program me!
  //   could have been done with .reverse()
    let result = []
  //   reverse loop
    for(let i = array.length - 1; i >= 0; i--){
      result.push(array[i])
    }
    
    return result
      
  }
  console.log(reverse([123,321,43434,'asda',123]));