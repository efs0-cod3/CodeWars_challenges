function openOrSenior(data){
    // ...
    let output = [];
  //   first solution
  //  for(let i=0;i < data.length;i++){
  // // console.log(data[i])
  //    if(data[i][0] >= 55 && data[i][1] > 7){
  //    output.push('Senior')
  //  }else{
  //    output.push('Open')
  //  }
  //  }
  //   return output
    
  //   solution with map
    data.map(l => {
      if(l[0]>=55 && l[1] > 7 ){
     output.push('Senior')
      }else{
     output.push('Open')
      } 
    })
    return output
  
    
  }
  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
  
  // p => and array of arrays... with two pairs of info age and handicap [55,21]
  // r => and array of strngs with open or senior depending age and handicap. senior = age >= 55 and  handicap > 7
  // e => input =  [[18, 20]] ouput = [open]
  // p => i need a loop
  //         conditionals
  //         catcher for the info => output