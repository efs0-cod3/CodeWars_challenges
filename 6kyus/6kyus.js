//  6kyus katas

// Unique In Order 19/04/2022
var uniqueInOrder = function(iterable){
    //your code here - remember iterable can be a string or an array
    let uOrder=[]
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i+1]){ //look if the next iteration will be equal than the current iteration, and if not it will push the current one!
      uOrder.push(iterable[i])
    }
  }
  return uOrder
  }

// Take a TEN Minutes Walk 19/04/2022
function isValidWalk(walk) {
    //insert brilliant code here
  if(walk.length != 10){
    return false
  }else {
    let rqWalk = walk.length
    let count1 = 0; //to catch walk from n++ to s--
    let count2 = 0; //to catch walk from w++ to e--
    for(let i = 0; i < walk.length; i++){
      if(walk[i] == 'n'){
        count1++ 
      }else if(walk[i] == 's'){
        count1--
      } else if(walk[i] == 'w'){
        count2++
      } else if(walk[i] == 'e'){
        count2--
      }
    }
    return rqWalk == 10 && count1 == 0 && count2 == 0 
  }
  }