
function automorphic(n){
    //your code here
  //   get the number to compare
    let pow = Math.pow(n,2)
  //   convert the numbenr to str
    pow = pow.toString()
  //   transform the result of pow.slice(-n.toString().length)) to number an compare with n 
    return Number(pow.slice(-n.toString().length)) === n ? 'Automorphic' : 'Not!!' 
  }


function automorphic(n){  
    return Math.pow(n,2).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!" 
  }