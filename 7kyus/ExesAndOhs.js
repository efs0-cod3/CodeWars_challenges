function XO(str) {
    //code here
let catcherX = []
let catcherO = []
  str = str.toLowerCase()
for(let i = 0;i < str.length;i++){
  if(str[i] == 'x'){
    catcherX.push('x')
  }else if(str[i] == 'o'){
    catcherO.push('o')
  }
}
  return catcherX.length == catcherO.length
}