function isPowerOfTwo(n){
    //.. should return true or false ..
    let result = 0
    let isPow;
    
  for(isPow = 1; isPow < n; result++){
      isPow = 2 ** result
    }
    return isPow == n
    
    }