function tea42(input) {
    // your code
    let count = 0
    input= input.toString().split('')
    let result = []
    for(let i = 0; i < input.length;i++){
      input[i] == 2 || input[i] == '2' ? result.push('t') : result.push(input[i])
    }
    return result.join('')
  }

  function tea42(input) {
    return input.toString().replace (/2/g, 't');
   };