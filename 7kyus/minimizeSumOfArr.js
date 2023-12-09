function minSum(arr) {
  // your code here
    let count = 0;
  let sortedArr = arr.sort((min,max) => min - max)
  console.log(sortedArr);
  while(arr.length){
    count += arr.pop() * arr.shift()
  }
  return count
}

// console.log(minSum([5, 4, 2, 3]));
// console.log(minSum([12, 6, 10, 26, 3, 24]));


function minSum2(arr) {
  // your code here
    let count = 0;
  while(arr.length !== 0){
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    count += (max * min)
    arr.splice( arr.indexOf(max), 1 )
    arr.splice( arr.indexOf(min), 1 )
  }
  return count
}
console.log(minSum2([5, 4, 2, 3]));
console.log(minSum2([12, 6, 10, 26, 3, 24]));