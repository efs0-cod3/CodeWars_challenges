function getNumberFromString(s) {   
    let sNum = s.match(/\d+/g)
   let matches = sNum.join('')
    return +matches
  }
  console.log(getNumberFromString("this is number: 7"));
  console.log(getNumberFromString("1233"));
 


  function getNumberFromStringWReplace(s) {   
    let nums = s.replace(/\D/g,'')

    return nums
  }
  console.log(getNumberFromStringWReplace("this is number: 7"));
  console.log(getNumberFromStringWReplace("lgyfk74zumq7"));
