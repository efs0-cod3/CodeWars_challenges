function bump(x){
    let bumpsCounter = 0
    for(let i = 0; i < x.length;i++){
      if(x[i] === 'n') bumpsCounter++
    }
    return bumpsCounter <= 15 ? 'Woohoo!' : 'Car Dead'
  }

  function bumps(x) {
    return x.split('').filter(el => el == 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
  }
  console.log(bumps('____nnnnnnnn_____nnn___n_nnnn__'));