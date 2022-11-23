function countLettersAndDigits(input){
    let regex = /[a-zA-Z\d]/g
      let regResult  = input.match(regex)
      return regResult === null ? 0: regResult.length
    }
    console.log(countLettersAndDigits("hel2!lo"));