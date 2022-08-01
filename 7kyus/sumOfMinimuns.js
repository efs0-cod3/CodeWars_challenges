function sumOfMinimums(arr) {
    // your code here
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += Math.min(...arr[i]);
    }
    return result;
  }
  sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
// with reduce

//   function sumOfMinimums(arr) {
//     // your code here
//   let result = []
//     for(let i =0; i < arr.length;i++){
//       result.push(Math.min(...arr[i]))
//   }
//   return result.reduce((a,b) => a+b)
//   }
  

//  with map and reduce

// function sumOfMinimums(arr) {
//     // your code here
//     return arr.map(e=> Math.min(...e)).reduce((a,b) => a + b,0)
// }