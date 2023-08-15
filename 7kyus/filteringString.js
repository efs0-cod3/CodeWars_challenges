const filterString = function(value) {
    //Complete this function :)
    /* The `filterString` function takes a string as input and returns a number. */
    return Number(value.split('').filter(el => isNaN(el) === false).join(''))
}
console.log(filterString("aa1bb2casd1231309098a231231c3dd"));  


const filterStringNum = function(value) {
let numbers = []
  for(let o = 0; o < value.length; o++){
    if(isNaN(value[o]))continue
    numbers.push(value[o])
  }
  return Number(numbers.join(''))
}
console.log(filterStringNum("aa1bbsd1231309098a231231c3dd"));  


var FilterStringRgx = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}