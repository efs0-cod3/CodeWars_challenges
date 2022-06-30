function correct(string)
{
let catcher = ''
for(let i = 0; i < string.length; i++){
  if(string[i] == '0'){
    catcher += 'O'
  } else if(string[i] == '1') {
    catcher += 'I'
  }else if(string[i] == '5') {
    catcher += 'S'
  }else{
    catcher += string[i]
  }
}
  return catcher
}