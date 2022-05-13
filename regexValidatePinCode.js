function validatePIN (pin) {
    //return true or false
  let regex  = /^(\d{4}|\d{6})$/
  return regex.test(pin)
  }
  validatePIN("1234")