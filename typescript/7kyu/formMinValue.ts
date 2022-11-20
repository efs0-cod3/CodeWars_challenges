export const minValue = (values: number[]): number => {
  let result: number= Number([...new Set(values)].sort().join(''))
  return result
};
console.log(minValue([5, 7, 9, 5, 7]));