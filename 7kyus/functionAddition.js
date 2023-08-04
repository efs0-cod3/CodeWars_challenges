function add(n) {
    return function (f = 0){
      return f+n
    }
  }
  console.log(add(9)(3));