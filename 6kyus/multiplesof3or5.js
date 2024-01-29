function solution(number){
    const nums = []
    
    if (number < 0) return 0
  
  //   for loop that checks if i is % 3 or 5 and push it to nums
    for(let i = 1; i < number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        nums.push(i)
      }
    }
  //   sums all the acurrances in the arr
    return nums.reduce((acc,cur) => acc + cur, 0)

  }
  
  function otherSolution(number){

  //   sums all the acurrances in the arr
    return [...Array(number).keys()].filter(i => i % 3 ==0 || i % 5 ==0).reduce((a,c) => a+c,0);


  }

  console.log(solution(10))
  console.log(otherSolution(10))
//   console.log(solution(50))
  console.log(solution(9))
  console.log(otherSolution(9))
//   console.log(solution(200))

