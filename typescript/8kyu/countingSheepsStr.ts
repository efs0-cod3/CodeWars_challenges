export function countSheep(num: number): string {
    //your code here
    let result:string = ''
    for(let i:number = 1;i <= num; i++){
      result += `${i} sheep...`
    }
    return result
  
  }