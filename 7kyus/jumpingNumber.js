function jumpingNumber(n){
    //your code here
    let dif = []
    n = [...`${n}`].map(Number)
    console.log(n.length);
    if(n.length < 2) {
      return "Jumping!!"
    }
    
    for(let i = 0; i < n.length-1; i++){
        dif.push(Math.abs(n[i] - n[i+1]))
    }

    return (dif.reduce((acc,cur) => acc + cur,0)/ dif.length ) == 1 ? "Jumping!!" : "Not!!"
    
  }
  console.log(jumpingNumber(23));
  console.log(jumpingNumber(32));
  console.log(jumpingNumber(79));
  console.log(jumpingNumber(8987));
  console.log(jumpingNumber(4343456));