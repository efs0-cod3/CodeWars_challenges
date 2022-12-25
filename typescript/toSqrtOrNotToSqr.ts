export function squareOrSquareRoot(array: number[]): number[] {
  return array.map((el) => {
    if (Math.round(Math.sqrt(el)) ** 2 !== el) {
      return Math.pow(el, 2);
    } else {
      return Math.sqrt(el);
    }
  });
}
