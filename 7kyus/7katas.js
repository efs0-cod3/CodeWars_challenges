/*From Bottom Up*/
// 7kyus

//You're a square! 9/5/2022
var isSquare = function(n){
    return n === (Math.round(Math.sqrt(n))**2) ? true : false; // fix me
  }



// sum two lowest positive integers 27/04/2022
function sumTwoSmallestNumbers(numbers) {
    //Code here
    numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

//Friend or Foe? 18/04/2022
function friend(friends) {
    //your code here
    return friends.filter(el => el.length == 4)
}

//list filtering 18/04/2022
function filter_list(l) {
    // Return a new array with the strings filtered out
    let catcher = []
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number')
            catcher.push(l[i])
    }
    return catcher
}

//reverse Words 18/04/2022
function reverseWords(str) {
    // Go for it
    let reversed = ''; //empty str to catch the letters
    for (var i = str.length - 1; i >= 0; i--) { //reverse loop to iterate from the end
        reversed += str[i] // set reverse += each letter
    }
    return reversed.split(' ').reverse().join(' ') // split reversed into array reverse it and join by words!
}

//complementary DNA 17/04/2022
function DNAStrand(dna) {
    //your code here
    let catcher = [] //it will catch all the letters
    dna.split('').forEach(el => { //split dna unto array and iterate each index to check the letter to push the output to catcher
        switch (el) {
            case 'T':
                catcher.push('A')
                break;
            case 'A':
                catcher.push('T')
                break;
            case 'C':
                catcher.push('G')
                break;
            case 'G':
                catcher.push('C')
                break;
        }
    })
    return catcher.join('')
}

//remove the minimum 10/04/2022
function removeSmallest(numbers) {
    //   throw "TODO: removeSmallest";
    let numClone = [...numbers] //create an array spreading the values of numbers array
    if (numClone == []) {
        return numClone // if its empty array return empty array (braquets [])
    } else if (numClone.length == 1) {
        numClone.pop() // if array length is 1 pop that value and return empty array (braquets [])
        return numClone
    } else {
        //      find the index of the minimun value and remove that and only that value
        numClone.splice(numClone.indexOf(Math.min(...numClone)), 1)
        return numClone //return the resulting array
    }
}

function removeSmallest(numbers) {
    //figure out all previous code was doing the same than this!
    //create an array spreading the values of numbers array
    let numClone = [...numbers]
    // find the index of the minimun value and remove that and only that value
    numClone.splice(numClone.indexOf(Math.min(...numClone)), 1)
    //return the resulting array
    return numClone
}

// the coupon code
function checkCoupon(insertedcode, validCode, currentDate, expDate) {

    if (insertedcode === validCode && Date.parse(currentDate) <= Date.parse(expDate)) {
        // if code inserted is exactly equal valid code and currentdate is less or equal the exp Date return T
        return true
    }
    return false
}


// Summing a number's digits 07/04/2022
// my solution
function sumDigits(number) {
    let nStr = number.toString()
    let notNArr = [] //here goes the 'minus' sign
    let nArr = [] // here goes the numbers
    for (let i = 0; i < nStr.length; i++) {
        if (nStr[i] == '-') {
            notNArr.push(nStr[i]) //if nStr[i] not a number, it will go to 'notNArr'
        } else {
            nArr.push(Number(nStr[i])) //if nStr[i] is a number, it will go to 'nArr' to be sum
        }
    }
    return nArr.reduce((a, b) => a + b) //reduce the 'nArr' to a single value by adding
}

// my solution after discovering Mat.abs()
function sumDigits(number) {
    let nStr = Math.abs(number).toString()
    nArr = []
    for (let i = 0; i < nStr.length; i++) {
        nArr.push(Number(nStr[i]))
    }
    return nArr.reduce((a, b) => a + b)
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