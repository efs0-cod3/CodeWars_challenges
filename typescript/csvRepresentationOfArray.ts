// 3 CASES 
export function toCsvText(array: number[][]): string {
  let numString: string = "";
  for (let i: number = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      numString += array[i].join(",");
    } else {
      numString += array[i].join(",") + "\n";
    }
  }
  return numString;
}
toCsvText([
  [0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
]);

//  WITH MAP
export function toCsvText2(array: number[][]): string {
  return array.map((x) => x.join(",")).join("\n");
}
toCsvText2([
  [-25, 21, 2, -33, 48],
  [30, 31, -32, 33, -34],
]);

// ONLY JOIN
export function toCsvText3(array: number[][]): string {
  return array.join("\n");
}
toCsvText3([
  [5, 55, 5, 5, 55],
  [6, 6, 66, 23, 24],
  [666, 31, 66, 33, 7],
]);
