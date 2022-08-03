function solve(s) {
  //..
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == s[i].toUpperCase() ? upper++ : lower++;
  }
  return upper > lower ? s.toUpperCase() : s.toLowerCase();
}
