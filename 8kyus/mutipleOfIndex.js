function multipleOfIndex(array) {
    // good luck
    let output = []
    array.forEach((e,i) => {
      if(e % i == 0){
        output.push(e)
      }
    })
    return output
  }