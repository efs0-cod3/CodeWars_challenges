export function wordValue(arr: string[]) {
  // your code here
  let abc: string = "abcdefghijklmnopqrstuvwxyz";
  let count: number = 0;
  let catcher: number[] = [];

  //  loop to get through the length of the arr
  for (let i: number = 0; i < arr.length; i++) {
    //  loop in a loop to get each letter of the item
    for (let j: number = 0; j < arr[i].length; j++) {
      //  get index of letter + 1 and add that value to count
      count += abc.indexOf(arr[i][j]) + 1;
    }
    //  push count value plus index of i + 1 to catcher
    catcher.push(count * (i + 1));
    //  restar value of count to 0
    count = 0;
  }
  //  result in an array of numbers wich is the value of catcher
  return catcher;
}
wordValue(["abcdefghijklmnopqrstuvwxyz", "stamford bridge", "haskellers"]);

// export function wordValue(arr: string[]): number[] {
// add space to make another index.
//   const w : string = ' abcdefghijklmnopqrstuvwxyz'
//   return arr.map((x, i) => x.split('').reduce((sum, y) => sum + w.indexOf(y) , 0) * (i + 1))
// }

// make a test
// export function wordValue(arr: string[]) {
//   const alphabets = 'abcdefghijklmnopqrstuvwxyz'
//   const alphabetsMap = alphabets
//     .split('')
//     .reduce((acc, curr, idx) => acc.set(curr, idx + 1), new Map())

//   return arr.reduce((acc: number[], curr, idx) => {
//     let temp = 0

//     curr
//       .toLowerCase()
//       .split('')
//       .forEach((value) => (temp += value === ' ' ? 0 : alphabetsMap.get(value)))

//     temp *= idx + 1
//     acc.push(temp)

//     return acc
//   }, [])
// }
