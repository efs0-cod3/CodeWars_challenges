function replace(s){
    //coding and coding....
  //   Hway
  //   const letters = ['a','e','i','o','u','A','E','I','O','U']
  //   let result = ''  
  //   for(let i = 0; i < s.length; i ++){
  //     letters.includes(s[i]) ? result += '!' : result += s[i]
  //   }
  //   return result
    
  //   rgxWay
//   Should have used the insensitive case tag i on the regex like 
// const rgx = /[aeiou]/gi
    const rgx = /[aeiouAEIOU]/g
  s = s.replace(rgx, '!')
    return s
    
  }