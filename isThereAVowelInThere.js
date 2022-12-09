function isVow(a) {
  let vow = ["a", "e", "i", "o", "u"];
  let s = [];
  for (let i = 0; i < a.length; i++) {
    if (vow.includes(String.fromCharCode(a[i]))) {
      s.push(String.fromCharCode(a[i]));
    } else {
      s.push(a[i]);
    }
  }
  return s;
}
