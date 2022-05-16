// P -> an array
// R -> array. param empty return empty array, else arr with 'new line'
// E  -> number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
// P -> I need to get a counter
//      I need to use a loop
//      I need an element catcher

var number=function(array){
    //your awesome code here
    let counter = 1;
    let catcher = []
    for(let i=0; i < array.length;i++){
      catcher.push(`${counter++}: ${array[i]}`)
    }
    return catcher
    
  }
  number(['a','b'])