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