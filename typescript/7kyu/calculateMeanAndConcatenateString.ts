export function mean(lst: string[]): [number, string] {
  //code here
  const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const numberCatcher: number[] = [];
  const letterCatcher: string[] = [];

  lst.forEach((el) => {
    if (numbers.includes(el)) {
      numberCatcher.push(Number(el));
    } else {
      letterCatcher.push(el);
    }
  });

  const avg = numberCatcher.reduce((a, b) => a + b, 0) / numberCatcher.length;

  return [avg, letterCatcher.join("")];
}


// export function mean(lst: string[]): [number,string] {
//   //code here
//   const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//   const numberCatcher: number[] = [];
//   const letterCatcher: string[] = [];

//   lst.forEach((el) => {
//     if (!isNaN(el)) {
//       numberCatcher.push(Number(el));
//     } else {
//       letterCatcher.push(el);
//     }
//   });

//   const avg = numberCatcher.reduce((a, b) => a + b, 0) / numberCatcher.length;

//   return [avg, letterCatcher.join("")];
// }
// mean([
//   "u",
//   "6",
//   "d",
//   "1",
//   "i",
//   "w",
//   "6",
//   "s",
//   "t",
//   "4",
//   "a",
//   "6",
//   "g",
//   "1",
//   "2",
//   "w",
//   "8",
//   "o",
//   "2",
//   "0",
// ]);
