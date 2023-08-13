var findDigit = function (num, nth) {
  let numStr = num.toString();
  numStr = numStr.startsWith("-") ? numStr.substring(1) : numStr;
  return nth < 1
    ? -1
    : nth > numStr.length
    ? 0
    : Number(numStr.charAt(numStr.length - nth));
};

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
