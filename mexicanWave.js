function wave(str){
    // Code here
     const catcher = [];
    for(let i = 0; i < str.length; i++){
      const strArr = str.split('');
      if (strArr[i] !== ' ')  {
        strArr[i] = strArr[i].toUpperCase();
        catcher.push(strArr.join('')) 
      }
    }
    return catcher
  }
  wave('hello')