export const strongNumber = (num: number) => {
  // Your Code here .. Enjoy !!
  let numStr: string = num.toString();
  let splitNumStr: string[] = [...numStr];
  let newArr: number[] = [];
  let count: number = 1;
  for (let i: number = 0; i < splitNumStr.length; i++) {
    for (let j: number = 1; j <= Number(splitNumStr[i]); j++) {
      count *= j;
    }
    newArr.push(count);
    count = 1;
  }
  return newArr.reduce((acc, cur) => acc + cur) === num
    ? "STRONG!!!!"
    : "Not Strong !!";
};
strongNumber(145)

// ===============

// export const strongNumber = (num: number): string => {
//   var arr: number[] = [];

//   function factorial(n: number) { 
//       return n <= 1 ? 1 : n * factorial(n - 1)
//   }

//   return num === String(num).split('')
//       .map((e) => Number(e))
//       .map((e) => factorial(e))
//       .reduce((a, b) => a + b) ? "STRONG!!!!" : "Not Strong !!";
// };