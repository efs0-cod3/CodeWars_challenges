function sumOfN(n) {
  let catcher = [0];
  if (n < 0) {
    for (let i = 0; i >= n; i--) {
      catcher.push(catcher[catcher.length - 1] + i);
    }
    catcher.shift();
  } else {
    for (let i = 0; i <= n; i++) {
      catcher.push(catcher[catcher.length - 1] + i);
    }
    catcher.shift();
  }
  return catcher;
}

function sumOfNT(n) {
  let catcher = [0];
  for (let i = 0; i <= Math.abs(n); i++) {
    n > 0
      ? catcher.push(catcher[catcher.length - 1] + i)
      : catcher.push(catcher[catcher.length - 1] - i);
  }
  catcher.shift();

  return catcher;
}

console.log(sumOfNT(3));
console.log(sumOfNT(-3));
