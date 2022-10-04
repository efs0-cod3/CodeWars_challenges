function digits(n) {
    // transform digits to string and split it into arr
    n = n.toString().split('')
  //   return n length                                                                                                                                                                                                                                                                                        
    return n.length
  }

  function digits(n) {
    // transform digits to string to make it iterable and spread it into arr.
  n = n.toString() 
    n = [...n]
  //   return n length
    return n.length
  }
  digits(12345)