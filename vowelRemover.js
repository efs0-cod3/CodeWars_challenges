
function shortcut (string) {
    let avoid = ['a','e','i','o','u']
    let str = string.split('')
    let catcher = []
    
    for(let l of str){
      if(!avoid.includes(l)){
        catcher.push(l)
      }
    }
  return catcher.join('')
  }