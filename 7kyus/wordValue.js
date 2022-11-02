function wordValue(arr) {
  // your code here
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  let catcher = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      count += abc.indexOf(arr[i][j]) + 1;
    }
    catcher.push(count * (i + 1));
    count = 0;
  }
  return catcher;
}
wordValue(["abc", "abc"]);
