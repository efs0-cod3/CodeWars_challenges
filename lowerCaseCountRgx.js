function lowercaseCount(str){
    //How many?
  const rgx = /[a-z]/g
  const matches = str.match(rgx)
  return matches ?  matches.length : 0
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));