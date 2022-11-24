export function seven(m: number) {
  // your code
  let step: number = 0;
  let result: number = m;

  while (result.toString().length > 2) {
    let strArr: string[] = result.toString().split("");
    let lastDigit: number = Number(strArr.pop());
    let number: number = Number(strArr.join(""));
    result = number - lastDigit * 2;
    step++;
  }
  return [result, step];
}

// export function seven(m: number): number[] {
//   let steps = 0;
//   let value = m;

//   while (`${value}`.length > 2) {
//     let arr = [...`${value}`];
//     const right = Number(arr.pop());
//     const left = Number(arr.join(""));
//     value = left - 2 * right;
//     steps++;
//   }

//   return [value, steps];
// }
