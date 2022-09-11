function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
  }

  function squareSumr(numbers) {
    return numbers.reduce((a, b) => a + (b*b) , 0);
  }
  console.log(squareSum([1,2,2,3]));
  console.log(squareSumr([1,2,2,3]));