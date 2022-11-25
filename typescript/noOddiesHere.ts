export function noOdds(values: number[]): number[] {
    // Return all non-odd values
    return values.filter(num => num % 2 === 0) 
  }
  console.log(noOdds([0,1,2,3,4,5]));