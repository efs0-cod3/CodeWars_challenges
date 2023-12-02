function padIt(str, n) {
  //coding here
  let i = 1;
  str = str.split();
  while (i <= n) {
    if (i % 2 != 0) {
      str.unshift("*");
    } else {
      str.push("*");
    }
    i++;
  }
  return str.join("");
}

console.log(padIt("a", 5));
