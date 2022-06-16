function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}


// other solution
function firstNonConsecutive(arr) {
  //determine what the difference between numbers that are next to each other equals
  //for numbers to be consecutive, they should be 1 apart from each other

  //need a for loop
  //need an if statement: if i doesn't equal + or - 1 return [i]
  //return null if nothing catches in the if statement

  for (let i = 1; i < arr.length; i++) {
    let currentNum = arr[i];
    let numBehind = arr[i - 1];
    if (currentNum !== numBehind + 1) {
      return currentNum;
    }
  }
  return null;
}
