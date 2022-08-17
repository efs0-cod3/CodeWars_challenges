function sumMul(n, m) {
  //your idea here
  let result = [];
  if (m < 1) {
    return "INVALID";
  } else {
    for (let i = 0; i < m; i += n) {
      result.push(i);
    }
    return result.reduce((a, b) => a + b, 0);
  }
}
