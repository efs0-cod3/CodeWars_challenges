function remove (string) {
    //coding and coding....
    let result 
    string = string.split('')
    console.log(string)
    if(string[string.length - 1] == '!'){
      result = string.slice(0, string.length -1).join('')
    }else{
      result = string.join('')
    }
    return result
  }

  function remove (string) {
    //coding and coding....
    let result; 
    string = string.split('')
    console.log(string)
    if(string[string.length - 1] == '!'){
      result = string.slice(0, -1).join('')
    }else{
      result = string.join('')
    }
    return result
    
  }

  // simple method

  function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

  //regex

  const remove = s => s.replace(/!$/, '');