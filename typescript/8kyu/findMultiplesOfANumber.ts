  export function findMultiples(integer: number, limit: number): number[] {
    //your code here
    const result: number[] = []
    for(let i: number = 1; i <= limit; i++){
      if(integer * i <= limit) result.push(integer*i)
    }
    return result
  }