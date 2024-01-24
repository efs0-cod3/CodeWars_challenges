function disariumNumber(n){
    //your code here
    let nArr = [...`${n}`].map(Number),
        powNum = nArr.map((num,i) => Math.pow(num,i+1))
    .reduce((acc,cur)=> acc + cur,0)
    
    return powNum == n ? 'Disarium !!' : 'Not !!'
  
  }
  console.log(disariumNumber(89));
  console.log(disariumNumber(564));
  console.log(disariumNumber(1024));
  console.log(disariumNumber(135));
  console.log(disariumNumber(136586));