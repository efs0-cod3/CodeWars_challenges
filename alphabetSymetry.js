function solve(arr) {
  // your code here
  let abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let count = 0;
  let result = [];

  for (let word of arr) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
      console.log(word[i], abc[i]);
      if (word[i] === abc[i]) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }
  return result;
}
console.log(solve(["abode", "ABc", "xyzD"]));
