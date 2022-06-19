function longestConsec(arr, k) {
  if (arr.length === 0 || k > arr.length || k <= 0) return "";
  //   n being the length of the string array, if n = 0 or k > n or k <= 0 return ""

  let newArr = []; //make the strngs
  for (let i = 0; i < arr.length - k + 1; i++) {
    newArr[i] = arr.slice(i, k + i).join("");
  }

  let lengthArr = newArr.reduce(function (a, b) {
    return a.length >= b.length ? a : b;
  });
  return lengthArr;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
