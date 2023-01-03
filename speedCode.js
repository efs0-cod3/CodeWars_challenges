function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  return a.reduce((acc, cur) => acc + Math.pow(cur, 2), 0) >
    b.reduce((acc, cur) => acc + Math.pow(cur, 3), 0)
    ? true
    : false;
}
