/*From Bottom Up*/

// added 3/30/2022
// Is he gonna survive? 
function hero(bullets, dragons){
//Get Coding!
 return  bullets >= dragons*2 ? true : false
}

// Convert a string to an array
function stringToArray(string){
  // code code code
return string.split(' ')
}
 
// String repeat
function repeatStr (n, s) {
let strAdded = ''
  for(let i = 0; i < n; i++){
    strAdded += s
  }
  return strAdded
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args.reduce((a,b) => Math.min(a,b))
return min
  }
}

// Sentence Smash
function smash (words) {
   return words.join(' ')
};

// Keep Hydrated!

function litres(time) {
  return Math.floor(time * 0.5);
}

// You only need one - Beginner
function check(a, x) {
  // your code here
  return a.includes(x)
}

// MakeUpperCase
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

// Grasshopper - Personalized Message
function greet (name, owner) {
  // Add code here
  return name === owner ? 'Hello boss' : 'Hello guest';
  }

// Opposite number
function opposite(number) {
  //your code here
 return number = Number(`${-number}`) 
}
// Opposite number 2
function opposite(number) {
  //your code here
  if(number > 0){
 number = Number(`${-number}`)
  }else{
    number = Number(`${-number}`)
  }
  return number
}

// Century From Year
function century(year) {
  // Finish this :)
   let cent = ''
    if(year.toString().slice(-2)==00){
    cent = year/100   
    }else {
        cent = Math.floor(year/100 + 1)
    }
    return cent
}

// Invert values
function invert(array) {
    for (let i = 0; i < array.length; i++) {
       array[i] =  -array[i]
    }
  return array
  
}
// invert([1,-2,3,-4,5])



// Basic Mathematical Operations
function basicOp(operation, value1, value2){
  switch(operation){
    case '+':
      return value1 + value2;
      break
      case '-':
      return value1 - value2;
      break
      case '*':
      return value1 * value2;
      break
    case '/':
      return value1 / value2;
      break
  }
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) == 'r' || name.charAt(0) == 'R'){
    return name + ' plays banjo' ;
  }else {
    return name + ' does not play banjo';
  }
}
areYouPlayingBanjo('Ringo')

// Multiply
function multiply(a, b){
return  a * b
}
multiply(3,4)
