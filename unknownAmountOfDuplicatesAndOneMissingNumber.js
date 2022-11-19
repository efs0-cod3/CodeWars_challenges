// this works but not time complexity is way to big
function findDupsMiss(arr) {
    // your code here
//   get missing num
  let nArr = [...new Set(arr)]
  let nArrS = nArr.sort((a,b)=> {return a - b})
  let max = Math.max(...nArrS)
  let min = Math.min(...nArrS)
  let missingNum = 0
  
  for(let i = min; i < max; i++){
    if(!nArrS.includes(i)) missingNum = i
  }
// duplicates
  arr = arr.reduce((acc,cur) => {
    return acc[cur] ? acc[cur]++ : acc[cur] = 1, acc 
  }, {})
  let getDup = Object.entries(arr).filter(([k,v]) => {
    if(v > 1) return k
  }).map(el => Number(el[0]))

console.log([missingNum,getDup])
return [missingNum,getDup]
}

//  this works for time complexity.

function findDupsMiss(arr) {
    // your code here
//   get missing num
  let nArrS = arr.sort((a,b)=> {return a - b})
  let dup = []
  let missingNum = 0
  
  nArrS.forEach((el,i) => {
    if(el === nArrS[i + 1]){
      dup.push(el)
    }else if(arr[i+1]-el === 2) {
      missingNum = el+1
    }
  })
  
return [missingNum,dup]
}
// console.log(findDupsMiss([24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54]));


// function findDupsMissr(arr) {
//     const obj={}, arr1=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(obj[arr[i]]){
//             arr1.push(arr[i]);
//         }else{
//             obj[arr[i]]=1;
//         }
//     }
//     console.log(['obj = ',obj,arr1])
//     const set = new Set([...arr]);
//     const arr2 = [...set].sort((a,b)=>a-b);
//     let fast = arr2[0];
//     for (let i = 0; i < arr2.length; i++) {
//         if(arr2[i] != fast){
//             break;
//         }
//         fast = fast+1;
//     }
//     // console.log(fast, arr1.sort((a,b)=>a-b));
//     return [fast, arr1.sort((a,b)=>a-b)];
// }
// console.log(findDupsMissr([24,25,34,40,38,26,33,29,50,31,33,56,35,36,53,49,57,27,37,40,48,44,32,35,45,52,43,47,26,51,55,28,41,42,46,51,25,30,44,54]));
