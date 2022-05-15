// P -> an array x length.
// R -> array without every second element.
// E -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 3, 5, 7, 9].
// P -> utilize a method that jumps arr index modulo 2.

function removeEveryOther(arr){
    //your code here
   let catcher= []
    arr.forEach((e,i) => {
      if(i % 2){
        return
      }else{
        catcher.push(e)
      }
    })
    return catcher
  }