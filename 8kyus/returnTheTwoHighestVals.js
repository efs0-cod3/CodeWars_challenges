function twoHighest(arr) {
    let result = []
    let checker = 0
    
    if(arr.length == 0 || arr.length == 1){
      return arr
    }
    
    arr = arr.sort((min,max) => min - max)
    result.push(arr[arr.length - 1])
    
    for(let i =0; i < arr.length; i++){
      if(arr[i] > checker && !result.includes(arr[i])){
        checker = arr[i]
      }
    }
    result.push(checker)
      return result
    
  }

  console.log(twoHighest([15, 20, 20, 17]));
  console.log(twoHighest([15]));
  console.log(twoHighest([]));


    //   ANOTHER EXAMPLE more efficient
  
    function twoHighestT(arr) {
      
        return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
      }
      console.log(twoHighestT([15, 20, 20, 17]));