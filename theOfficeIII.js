function broken(x){
    let result = ''
    for(let i = 0; i < x.length; i++){
      if(x[i] === '1'){
        result += '0'
      }else{
        result += '1'
      }
    }
    return result
  }
  console.log(broken("10000000101101111110011001000"));
  

  // function broken(x){
    // return x.split('').map(a => a == "0" ? "1" : "0").join('');
  // }