function whoIsPaying(name){
    //your code here
    let trunc
    let arr = []
    if(name.length > 2){
    trunc = name.slice(0,2)
    arr.push(name, trunc)
    }else(
      arr.push(name)
    )
    return arr
  }