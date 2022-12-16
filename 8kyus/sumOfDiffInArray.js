function sumOfDifferences(arr) {
  arr = arr.sort((a, b) => b - a);
  let result = [];
  if (arr.length == 0 || arr.length == 1) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 1) {
        result.push(arr[i] - arr[i + 1]);
      }
    }
  }
  return result.reduce((a, b) => a + b, 0);
}
