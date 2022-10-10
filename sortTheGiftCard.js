// Desc: Reorganizes a code of letters to have alphabetical order

// p = string
// r = string
// e = sortGiftCode('pqksuvy'), 'kpqsuvy')
// p =
function sortGiftCode(code){
    //TODO 
  //   split str into arr
    let codeArr = [...code]
  //   sort arr and join it to make it back a str
    let sortedNJoined = codeArr.sort().join('')
    
    return sortedNJoined
  }