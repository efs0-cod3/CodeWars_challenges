/*From Bottom Up*/

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