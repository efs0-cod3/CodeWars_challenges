//   // PREP
//   // (P)arameter - takes in an array of integers
//   // (R)eturn - returns the interger that appears an odd number of times.
//   // (E)xample - [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5] => 5

//   // (P)seudocode -

function findOdd(A) {
  //happy coding!
  // create empty obj
  let found = {}
  //   // Iterate through the array and add to the obj
  for(let i = 0; i < A.length; i++){
    found[A[i]] = ++found[A[i]] || 1
  }

  // iterate to the object for in loop
  for(const k in found){
    // get the value that is not % 2 
    if(found[k] % 2 != 0){
      // return the key of that value
      return +k
    }
  }
}

// function findOdd(A) {
//   const freq = {}; //create an empty obj
//   for (const num of A) { //iterate through the arr
//     freq[num] = (freq[num] || 0) + 1; //push the number and the times it appears on the arr as [key,val] pair
//   }
//   return +Object.keys(freq).find((num) => freq[num] % 2 == 1); //return the key that has a value with an odd number
// }

// function findOdd(A) {
//   //happy coding!
//   let found = {};
//   for (let i = 0; i < A.length; i++) {
//     let keys = A[i].toString();
//     found[keys] = ++found[A[i]] || 1;
//   }

//   return Number(Object.keys(found).find((n) => found[n] % 2 != 0));
// }

// function findOdd(A) {
//   const appearances = {};
//   A.forEach((val) => {
//     appearances[val] = (appearances[val] || 0) + 1;
//   });
//   const oddNumbers = Object.keys(appearances).filter(
//     (key) => appearances[key] % 2 != 0
//   );
//   return oddNumbers.length > 0 ? oddNumbers[0] : NaN;
// }

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));


// combination for loop and .filter
// function findOdd(arr) {
//   // PREP
//   // (P)arameter - takes in an array of integers
//   // (R)eturn - returns the interger that appears
//   // an odd number of times.
//   // (E)xample - 
//   // (P)seudocode -
//   // Iterate through the array
//   for (let i = 0; i < arr.length; i++) {
//     // filter for arr[i]
//     // if the length of the filtered array
//     // is odd, that's the odd number
//     if (arr.filter(e => e == arr[i]).length % 2 != 0) {
//       return arr[i]
//     }
//   }
// }