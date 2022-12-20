export function monkeyCount(n: number): number[] {
  // your code here
  const result: number[] = [];
  for (let i: number = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}
