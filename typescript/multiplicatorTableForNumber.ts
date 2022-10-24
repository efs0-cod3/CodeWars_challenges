export function multiTable(number:number):string {
    // good luck
    let result: string = ''
    for(let i: number = 1; i <= 10; i++){
      if(i < 10){
        result += `${i} * ${number} = ${i*number}\n`
      }else{
        result += `${i} * ${number} = ${i*number}`
      }
    }
    return result
  }