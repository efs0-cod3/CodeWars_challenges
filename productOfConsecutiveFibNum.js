function productFib(prod) {
  // ...
  let n1 = 0,
    n2 = 1,
    nextNum;
  nextNum = n1 + n2;
  while (nextNum != prod) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;

    if (n1 * n2 == prod) {
      return [n1, n2, n1 * n2 == prod];
    } else if (n1 * n2 > prod) {
      return [n1, n2, n1 * n2 == prod];
    }
  }
}
