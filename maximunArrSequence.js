var maxSequence = function(arr){
    let min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
    }
    return ans;
  }

// other solution
  var maxSequence = function(arr){
    var maxNow = 0, maxSoFar = 0;
    for(i = 0; i < arr.length; i++){
        //If adding the new number to our list
        //causes us to go negative, start over with 0
        maxSoFar = Math.max(0, maxSoFar + arr[i]);
        //Compare our new max, to our old and
        //assign highest value to our max holder
        maxNow = Math.max(maxSoFar, maxNow);
    }
    return maxNow;
}

//other solution
var maxSequence = function(arr){
  // Parameters: arr: an array of numbers
  // Return: the maximum sum of contiguous numbers
  // Example: maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6
  // Pseudocode: set a counter to 0, loop through the array, starting with each indice greater than 0,
  // then add the next indice to it. Compare to counter (and to self), then either stop or continue
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    let tracker = 0
    for (let j = i + 1; j <= arr.length; j++) {
      let cur = arr.slice(i, j).reduce((a,c) => a + c, 0)
      if (cur > tracker) tracker = cur
    }
    if (tracker > result) result = tracker
  }
  return result
}