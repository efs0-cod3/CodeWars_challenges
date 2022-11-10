export function solve(arr: string[]): number[] {
  // your code here
  let abc: string = "abcdefghijklmnopqrstuvwxyz";
  let count: number = 0;
  let result: number[] = [];

  for (let word of arr) {
    word = word.toLowerCase();
    for (let i: number = 0; i < word.length; i++) {
      if (word[i] === abc[i]) {
        count++;
      }
    }
    result.push(count);
    count = 0;
  }
  return result;
}
solve(["abode", "ABc", "xyzD"])
