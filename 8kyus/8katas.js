/*From Bottom Up*/
// 8kyus

// Remove spaces of str 6/05/2022
function noSpace(x){
  x = x.split(' ')
    let catcher = []
    x.forEach(el => {
      if(el !== ''){
        catcher.push(el)
      }
    })
    return catcher.join('')
  }
  
  //Simpler
  // x = x.split(' ').join('')


//  count positive and sum negatives 5/05/2022
  function countPositivesSumNegatives(input) {
    let countOfPos = 0;
     let negNums = [];
     if(input == null || input.length == 0){
       return []
     }else{
       for(let i = 0; i < input.length; i++){
         input[i] > 0 ? countOfPos++ : negNums.push(input[i])
       }
       const sumOfNegs = negNums.reduce((a,b) => a + b,0)
       return [countOfPos, sumOfNegs]
     }
   }

  // Grass hopper 1/05/2022
   function getGrade (s1, s2, s3) {
    // Code here
   let avg = (s1+s2+s3)/3
  let grade;
    if(avg >= 90){
      grade = 'A'
    }else if(avg >= 80 && avg < 90){
      grade = 'B'
    }else if(avg >= 70 && avg < 80){
      grade = 'C'
    }else if(avg >= 60 && avg < 70){
      grade = 'D'
    }else if(avg < 60){
      grade = 'F'
    }
    return grade
  }

  // Beginner series #2 Clock 
  function past(h, m, s){
    //#Happy Coding! ^_^
  return (
    h*3600000 // 1 hour = 3,600,000 ms
      +
      m*60000 // 1 min = 60,000 ms
      +
      s*1000 // 1 sec = 1,000 ms
    )
  }

  // Convert number to reversed array of digits 1/05/2022
  function digitize(n) {
    //code here
   let nArr = [] //number catcehr
    let nS = n.toString() // convert number to string
  for(let i= 0;i < nS.length; i++){
    nArr.push(+nS[i]) //push each str truned into number to nArr
  }
  return nArr.reverse() //reverse order in array
  }

  // find min and max 1/05/2022
  var min = function(list){
    list.sort((a,b) => a - b);
      
      return list[0];
  }
  
  var max = function(list){
    list.sort((a,b) => b - a);
      
      return list[0];
  }

  // even or odd 1/05/2022
  function even_or_odd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd'
  }

  // can we divide it? 1/05/2022
  function isDivideBy(number, a, b) {
    // good luck
  return number%a == 0 && number % b == 0 ? true : false
  }

// Sum without highest and lowest number 30/04/2022
function sumArray(array) {
  if (array == null || array.length == 1 || array.length == 2) {
    return 0
  } else {
    array.sort((a, b) => a - b)
    array.shift()
    array.pop()
    let result = array.reduce((a, b) => a + b, 0)
    return result
  }
}

function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0
  } else {
    return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
  }
}

// you cant code under presure 27/4/2022
function doubleInteger(i) {
  // i will be an integer. Double it and return it. 
  return i * 2;
}

// Will you make it to the gas station 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  let milesLeft = mpg * fuelLeft
  return milesLeft >= distanceToPump ? true : false
};

// remove first and last char

function removeChar(str){
  //You got this!
 let sArr = str.split('')
   sArr.pop()
   sArr.shift()
   return sArr.join('')
 };


// Sum ARrays 19/04/2022
// Sum Numbers
function sum(numbers) {
  "use strict";
  return numbers.reduce((a, b) => a + b, 0)
};

// Beginner - Reduce but Grow 19/04/2022
function grow(x) {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i]
  }
  return result
}

// Sum mixed Array 19/04/2022
function sumMix(x) {
  return x.reduce((a, b) => a + (+b), 0)
}

// DNA to RNA conversion 19/04/2022
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let regx = /T/ig
  return dna.replace(regx, 'U')
}

// Beginner - Lost without a Map 19/04/2022
function maps(x) {
  return x.map(e => e * 2)
}

// Remove exclamation marks 19/04/2022
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

// Sum of positive 19/04/2022
function positiveSum(arr) {
  return arr == '' ? 0 : arr.filter(num => num > 0).reduce((a, b) => a + b, 0)
}

// Return negative 19/04/2022
function makeNegative(num) {
  // Code?
  if (num === 0) {
    return 0
  } else if (num > 0) {
    return -num
  } else {
    return num
  }
}

// Count by X 19/04/2022
function countBy(x, n) {
  let z = [];
  for (let i = x; i <= (x * n); i += x) {
    z.push(i)
  }
  return z;
}

//Total amount of points 18/04/2022
function points(games) {
  // your code here 
  let point = 0
  games.map(el => {
    if (el[0] > el[2]) {
      point += 3
    } else if (el[0] == el[2]) {
      point += 1
    }
  })
  return point
}

//Calculate average 18/04/2022
function find_average(array) {
  // your code here
  if (array == '') {
    return 0
  } else {
    return parseFloat(array.reduce((a, b) => a + b, 0) / array.length)
  }
}

//Reversed sequence 18/04/2022
const reverseSeq = n => {
  let arr = []
  for (let i = n; i >= 1; i--) {
    arr.push(i)
  }
  return arr;
};

//Simple multiplication 18/04/2022
function simpleMultiplication(number) {
  // your code........
  return number % 2 ? number * 9 : number * 8
}

//function 1- hello world 17/04/2022
let greet = () => {
  return 'hello world!'
}

// Reversed Strigns 14/04/2022
function solution(str) {
  return str.split('').reverse().join('')
}

// Get the mean of an array 01/04/2022
function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let newArr = marks.reduce((a, b) => a + b)

  return Math.floor(newArr / marks.length)
}

// added 3/30/2022
// Is he gonna survive? 
function hero(bullets, dragons) {
  //Get Coding!
  return bullets >= dragons * 2 ? true : false
}

// Convert a string to an array
function stringToArray(string) {
  // code code code
  return string.split(' ')
}

// String repeat
function repeatStr(n, s) {
  let strAdded = ''
  for (let i = 0; i < n; i++) {
    strAdded += s
  }
  return strAdded
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args.reduce((a, b) => Math.min(a, b))
    return min
  }
}

// Sentence Smash
function smash(words) {
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
function greet(name, owner) {
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
  if (number > 0) {
    number = Number(`${-number}`)
  } else {
    number = Number(`${-number}`)
  }
  return number
}

// Century From Year
function century(year) {
  // Finish this :)
  let cent = ''
  if (year.toString().slice(-2) == 00) {
    cent = year / 100
  } else {
    cent = Math.floor(year / 100 + 1)
  }
  return cent
}

// Invert values
function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = -array[i]
  }
  return array
}
// invert([1,-2,3,-4,5])

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  switch (operation) {
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
  if (name.charAt(0) == 'r' || name.charAt(0) == 'R') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}


// Multiply
function multiply(a, b) {
  return a * b
}