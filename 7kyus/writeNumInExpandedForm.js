function expandedForm(num) {
    // Your code here
    let catcher = []
    num = [...num.toString()]
    for(let i = num.length-1, k = 1; i >= 0; i--, k++){
  //     console.log(num[i])
      if(num[i] == 0){
        continue
      }else{
        catcher.push(num[i].padEnd(k,0))
      }
    }
    
  //   console.log(catcher.reverse().join(' + '))
    return catcher.reverse().join(' + ')
   
  }

  console.log(expandedForm(12));
  console.log(expandedForm(70304));
  console.log(expandedForm(42));
