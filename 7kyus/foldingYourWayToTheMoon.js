// this worked but wasnt taht understandable

// function foldTo(distance) {
//   let paperThickness = 0.0001;
//   let folds = 0;

//   if (distance < 0) {
//     return null;
//   }
  
//   for (let i = 1; paperThickness <= distance; i + 2) {
//     paperThickness += paperThickness * i;
//     folds += i;
//   }
//   return folds;
// }
// 
// P distance in m
// R number of folds that are needed to reach the goal
// E foldTo(384000000),42
// P => 

function foldTo(distance) {
  //    paperThickness in m
    let paperThickness = 0.0001;
    let foldsCounter = 0;
  
    if (distance < 0) {
      return null;
    }
    
  // if i <= distance, i will double it size and foldsCounter will add 1
    for (let i = paperThickness; i <= distance; i *= 2) foldsCounter++;
  
    return foldsCounter;
  }
console.log(foldTo(384000000));
