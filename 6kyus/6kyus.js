//  6kyus katas

// Detect Pangram (if the str has every letter of the abc)
function isPangram(string){
    //...
  let abc = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return abc.every(l => string.toLowerCase().includes(l))
    // looks if string has every letter of abc var!
  }

// duplace encoder 5/05/2022
  function duplicateEncode(word){
    // ...
  let catcher = '';
  let lWord = word.toLowerCase();
  
for(let i= 0; i < lWord.length;i++){
  let count = 0;
  for(let j = 0; j < lWord.length; j++){
    if(lWord[i] == lWord[j]){
    count++
    }
  }
    count > 1 ? catcher += ')' : catcher += '('
}
  return catcher
}

// find uniq number 1/05/2022
function findUniq(arr) {
    // do magic
    arr.sort((a,b) => a-b)
  if(arr[0]==arr[1]){
    return arr.pop()
    }else{
      return arr[0]
    }
  }

//   Array.diff 1/05/2022
  function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el))
    }

// tribonnaci sequence  28/4/222
function tribonacci(signature,n){
    //your code here
    let tribo = signature
    if(n==0){
     return tribo = [] 
    } else if(n == 1){
      return tribo = [signature[0]] 
    }else if(n == 2){
     return tribo = signature.slice(0,2) //return the first 2 elements og arr
    }else if(n == 3){
      return signature //return the exact array
    }else {
      for(let i = 3; tribo.length < n; i++){ //start from tru
        tribo.push(tribo[tribo.length - 3] + tribo[tribo.length - 2] + tribo[tribo.length - 1]) //get the three last elements of signature sum it and push it to tribo
      }
    }
      return tribo // return the result!
  }

// are they the same?
function comp(array1, array2){
    //your code here
    if(array1 == null|| array2 == null) return false  // if either arr null return false
    
    let sArr1 = array1.sort((a,b) => a - b);
    let sArr2 = array2.sort((a,b) => a - b);
    
    return sArr1.every((i,index)=> i * i == sArr2[index]) //check if every item of arr1 is equal arr2!
   }


// Unique In Order 19/04/2022
var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let uOrder = []
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) { //look if the next iteration will be equal than the current iteration, and if not it will push the current one!
            uOrder.push(iterable[i])
        }
    }
    return uOrder
}

// Take a TEN Minutes Walk 19/04/2022
function isValidWalk(walk) {
    //insert brilliant code here
    if (walk.length != 10) {
        return false
    } else {
        let rqWalk = walk.length
        let count1 = 0; //to catch walk from n++ to s--
        let count2 = 0; //to catch walk from w++ to e--
        for (let i = 0; i < walk.length; i++) {
            if (walk[i] == 'n') {
                count1++
            } else if (walk[i] == 's') {
                count1--
            } else if (walk[i] == 'w') {
                count2++
            } else if (walk[i] == 'e') {
                count2--
            }
        }
        return rqWalk == 10 && count1 == 0 && count2 == 0
    }
}