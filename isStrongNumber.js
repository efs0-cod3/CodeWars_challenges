function strongNumber (num){
    // Your Code here .. Enjoy !!
  let numStr = num.toString()
  let strArr = [...numStr]
  let arr = [], count = 1

   for(let i = 0; i < strArr.length;i++){
     for(let j = 1; j <= Number(strArr[i]);j++){
              count *= j
     }
     arr.push(count)
     count = 1
   }
  
    
  return arr.reduce((acc,cur) => acc+cur) === num ? 'STRONG!!!!' : 'Not Strong !!'
  };
console.log(strongNumber(145));