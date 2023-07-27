function digPow(n, p) {
  // ...
  n = n.toString();
  let count = 0;
  const arr = [];
  
  for (let i = 0; i < n.length; i++) {
    arr.push(Number(n[i]));
  }

  for (let j = 0; j < arr.length; j++) {
    count += Math.pow(arr[j], p+j);

  }


  return count % n == 0 ? count / n: -1


}
console.log(digPow(46288, 3));