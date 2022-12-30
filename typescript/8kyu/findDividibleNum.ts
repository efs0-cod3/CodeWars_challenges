export function divisibleBy(numbers: number[], divisor: number): number[]{
    return numbers.filter(n=>n%divisor==0);
  }