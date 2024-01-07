function solution(value){
    //...
    let strVal = value.toString()
    return `Value is ${strVal.padStart(5, '0')}`
  }
  console.log(solution(1204));
  console.log(solution(104));
  console.log(solution(34));
  console.log(solution(4));