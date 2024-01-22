function balancedNum(number) {
  "Do your magic!";
  let fHalf = [],
    sHalf = [];
  let numArr = String(number).split("").map(Number);
  if (numArr.length <= 2) return "Balanced";

  if (numArr.length % 2 == 1) {
    fHalf = numArr.slice(0, Math.floor(numArr.length / 2));
    sHalf = numArr.slice(Math.ceil(numArr.length / 2));
  } else {
    fHalf = numArr.slice(0, Math.floor(numArr.length / 2) - 1);
    sHalf = numArr.slice(Math.ceil(numArr.length / 2) + 1);
  }

  const sum = (half) => {
    return half.reduce((acc, cur) => acc + cur, 0);
  };

  return sum(fHalf) == sum(sHalf) ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(1024));
console.log(balancedNum(202));
console.log(balancedNum(2));
console.log(balancedNum(22));
console.log(balancedNum(66545));
