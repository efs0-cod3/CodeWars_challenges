var findAverage = function (nums) {
  // Code here
  // reduce all nums by adding them all and divide by array length
  return nums.reduce((a,b)=> a+b)/nums.length
}