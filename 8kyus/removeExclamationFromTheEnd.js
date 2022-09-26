// p= str 
// r= str not ending ! 
// e= "Hi!!!", "Hi"
// p =>
function remove (s) {  
    s = s.split('') //split s into array
    for(let i = s.length-1; i >= 0; i--){ // reverse for loop
      if(s[i] == '!'){ // verify if last char of s is ! if is pop that !
          s.pop()
      }else{ // if not break loop
        break
      }
    }
  return s.join('') // return s into str again
  }


//   with regex
function remove(s){
    return s.replace(/!+$/, '');
  }