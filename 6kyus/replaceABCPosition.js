// Replace With Alphabet Position

function alphabetPosition(text) {
  let catcher = []
 text = text.toLowerCase().split('')

text.forEach(letter => {
  if(letter == 'a'){
    catcher.push(1)
  }else if(letter == 'b'){
    catcher.push(2)
  }else if(letter == 'c'){
    catcher.push(3)
  }else if(letter == 'd'){
    catcher.push(4)
  }else if(letter == 'e'){
    catcher.push(5)
  }else if(letter == 'f'){
    catcher.push(6)
  }else if(letter == 'g'){
    catcher.push(7)
  }else if(letter == 'h'){
    catcher.push(8)
  }else if(letter == 'i'){
    catcher.push(9)
  }else if(letter == 'j'){
    catcher.push(10)
  }else if(letter == 'k'){
    catcher.push(11)
  }else if(letter == 'l'){
    catcher.push(12)
  }else if(letter == 'm'){
    catcher.push(13)
  }else if(letter == 'n'){
    catcher.push(14)
  }else if(letter == 'o'){
    catcher.push(15)
  }else if(letter == 'p'){
    catcher.push(16)
  }else if(letter == 'q'){
    catcher.push(17)
  }else if(letter == 'r'){
    catcher.push(18)
  }else if(letter == 's'){
    catcher.push(19)
  }else if(letter == 't'){
    catcher.push(20)
  }else if(letter == 'u'){
    catcher.push(21)
  }else if(letter == 'v'){
    catcher.push(22)
  }else if(letter == 'w'){
    catcher.push(23)
  }else if(letter == 'x'){
    catcher.push(24)
  }else if(letter == 'y'){
    catcher.push(25)
  }else if(letter == 'z'){
    catcher.push(26)
  }
})
console.log(catcher.join(' ')) //To check result on vscode
return catcher.join(' ')
}
alphabetPosition("The sunset sets at twelve o' clock.")