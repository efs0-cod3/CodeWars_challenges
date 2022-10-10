// Desc: encode and decode a string
// p = string
// r = string
// e = encode('How are you today?'), 'H4w 1r2 y45 t4d1y?'
// e2= decode('h2ll4'), 'hello'
// pseudo code:

function encode(string) { 
    //   split str into arr
      string = [...string]
    //   set a to arrays one for the letters to look for and other to catch the code
      const vowels = ['a', 'e','i', 'o','u']
      let encoded = []
    //   for loop over string
      for(let l of string){
    //     check if letter to look includes a letter of string if so push the index of letter + 1
            if(vowels.includes(l)){
              encoded.push(vowels.indexOf(l) + 1)
            }else{
    //     else push the letter
              encoded.push(l)
            }
          }
    //   join the array to str
      return encoded.join('')
      }
    
    
    function decode(string) {
    //   split str into arr
      string = [...string]
    //   set a to arrays one for the letters to look and nums to look for (this will stablish the rules to decode the str) and other to catch the code
      const vowels = ['a', 'e', 'i', 'o', 'u']
      const numStr = ['1', '2', '3', '4', '5']
      let decoded = []
    //   for loop to iterate the string array
      for(let l of string){
    //     check the if num string includes the 'letter'
            if(numStr.includes(l)){
    //     if so change that num string to an actual number and subtract one to match the 0 index on the array
              decoded.push(vowels[Number(l)-1])
            }else{
    //     else push the letter
              decoded.push(l)
            }
          }
    //   join the array to str
      return decoded.join('')
    }


    //  other solution

    function encode(string) {
        const vowels = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 };
        return string.split('')
            .map(value => vowels[value] ? vowels[value] : value)
            .join('');
    }
    
    function decode(string) {
        const vowels = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
        return string.split('')
            .map(value => vowels[value] ? vowels[value] : value)
            .join('');
    }