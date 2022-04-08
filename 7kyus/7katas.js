/*From Bottom Up*/
// 7kyus

// Summing a number's digits
// my solution
function sumDigits(number) {
    let nStr = number.toString()
    let notNArr=[] //here goes the 'minus' sign
    let nArr=[] // here goes the numbers
      for(let i=0;i<nStr.length; i++){
        if(nStr[i] == '-'){
      notNArr.push(nStr[i]) //if nStr[i] not a number, it will go to 'notNArr'
        }else{
        nArr.push(Number(nStr[i])) //if nStr[i] is a number, it will go to 'nArr' to be sum
        }
        }
    return nArr.reduce((a,b) => a + b) //reduce the 'nArr' to a single value by adding
      }

// my solution after discovering Mat.abs()
function sumDigits(number) {
    let nStr = Math.abs(number).toString()
    nArr=[]
      for(let i=0;i<nStr.length; i++){
        nArr.push(Number(nStr[i]))
          }
    return nArr.reduce((a,b) => a + b)
      } 


// Get the Middle Character 04/04/2022
function getMiddle(s) {
    //Code goes here!
    //splits s into array
    let sArr = s.split('')
    //condition to to know if the length is even or not
    if (sArr.length % 2 == 0) {
        //     this will get the middle two letters of even length strings
        return sArr[Math.floor(sArr.length / 2) - 1] + sArr[Math.floor(sArr.length / 2)]
    } else {
        //     this will get the middle letter of odd length strings
        return sArr[Math.floor(sArr.length / 2)]
    }
}

// Find the next perfect square! 01/04/2022
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    // check if the square of sq is integer add 1
    if (Number.isInteger(Math.sqrt(sq))) {
        sq++
        //   while sq++ is not integer continue adding
        while (!Number.isInteger(Math.sqrt(sq))) {
            sq++
        }
        //   once the sqrt of sq is integuer return sq 
        return sq
    } else
        //     if The sqrt of sq submited is not integer return -1
        return -1
}

// added 3/30/2022
// Find the middle element
function gimme(triplet) {
    // make a copy from triplet and sorted it from min to max
    let org = triplet.slice().sort((a, b) => a - b);
    // return intex of the middle number
    return triplet.indexOf(org[1])
}

// Isograms
function isIsogram(str) {
    // ignore case
    let strArr = str.toLowerCase().split('')
    let charCnt = [] //word catcher
    for (let i = 0; i < strArr.length; i++) {
        if (!charCnt.includes(strArr[i])) { //if strArr[i] not in charCnt push strArr[i]
            charCnt.push(strArr[i])
        }
    }
    return strArr.join() === charCnt.join() // evaluate if strngs are equal!!
}

// Count the divisors of a number
function getDivisorsCnt(n) {
    // get the numbers of divisors
    let numOfDivisors = 0
    //   loop to get number of divisors
    for (let i = 1; i <= n; i++) {
        // n % i === 0 => n is divisible by i
        if (n % i === 0) {
            //increase the count of divisors!
            numOfDivisors++
        }
    }
    return numOfDivisors
}

// Factorial
function factorial(n) {
    // Calculate the factorial here
    //   loop to count back from n
    for (let i = n; i >= n; i--) {
        if (n < 0 || n > 12) {
            //     didn't know about throw keyWord!
            throw 'RangeError'
        } else if (n == 0) {
            return 1
        } else {
            //     mult n by factorial n * n-1
            return n * factorial(n - 1)
        }
    }
}

// Find the middle element 3/31/2022
function gimme(triplet) {
    // make a copy from triplet and sorted it from min to max
    let org = triplet.slice().sort((a, b) => a - b);
    // return intex of the middle number
    return triplet.indexOf(org[1])
}