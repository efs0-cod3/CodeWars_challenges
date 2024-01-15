function sumCubes(n) {
  // Initialize the sum
  let totalSum = 0;

  // Loop from 1 to n (inclusive)
  for (let i = 1; i <= n; i++) {
    // Add the cube of the current number to the sum
    totalSum += Math.pow(i, 3);
  }
  // Return the final sum
  return totalSum;
}
console.log(sumCubes(15));

