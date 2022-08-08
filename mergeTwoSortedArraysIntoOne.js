function mergeArrays(arr1, arr2) {
    //   prep
    //   p -> two arrs
    //   r -> arrs concated and sorted if values are repeated leave 1
    //   e ->
    //   pseudocode ->
    //   iterate arr2
      for (let i=0;i<arr2.length; i++){
    //     verify if arr2[i] is in arr1
        if(!arr1.includes(arr2[i])){
    //       if arr2[i] not in arr1 push it to arr1
          arr1.push(arr2[i])
        }
      } 
    //   sort the arr ascending order
    return arr1.sort((a,b)=>a-b)
    }