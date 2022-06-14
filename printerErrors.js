// P = they give a string of letters
// R = str with nums of the errors (letters not alllowed) over the length of letters analized
// E = s="aaabbbbhaijjjmx" printer_error(s) => "1/14" allowed from a to m
// P = [] to carch errors. arr w/ elem not allowed, compare elems
//  return str w/ errors.length/s.length
 

function printerError(s) {
    // your code
  let errors = []
  let badStr = ['n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  s = s.split('')
 for(let i = 0;i < s.length; i++){
  for(let j = 0;j < badStr.length; j++){
    if(s[i] == badStr[j])errors.push(s[i])
  }
}

  return `${errors.length}/${s.length}`
}