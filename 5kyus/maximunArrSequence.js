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