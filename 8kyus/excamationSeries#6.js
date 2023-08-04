function remove(s, n) {
  //coding and coding....
  for (let i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  return s;
}
console.log(remove("!Hi", 1));