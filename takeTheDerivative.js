function derive(coefficient,exponent) {
    let mult = coefficient*exponent
    if(exponent <= 2){
      return
    }else{
      return `${mult}x^${exponent-1}`
    }
  }