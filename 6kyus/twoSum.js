// arr N target
// loop through the numbers arr and check which two nums added matches the target
// rreturn the indexes
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 2, 3], 4));
