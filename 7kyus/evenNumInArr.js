const evenNumbers = (array, number) => {
  return array.filter((item) => item % 2 === 0)
  .slice(-number);
};


function evenNumbersMine(array, number) {
    // good luck
    const catcher = []
    for(let i = array.length; catcher.length < number; i--){
    if(array[i] % 2 == 0) catcher.unshift(array[i])
    }
  
  return catcher
    
  }