function largestPairSum(numbers) {
  //TODO: Write your Code here
  numbers = numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1] + numbers[numbers.length - 2];
}

function largestPairSum(numbers) {
  //TODO: Write your Code here
  let pairs = numbers.sort((a, b) => a - b).slice(-2);
  return pairs.reduce((a, b) => a + b, 0);
}
