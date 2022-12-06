function solve(s) {
  // get the value of each letter
  let abc = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  //   start the counter with 0 value
  let count = 0;
  //  initialize the number holder
  let numArr = [];
  //  replace each letter that we 'dont' want with a - and then split them into arr by -
  let arr = s.replace(/[aeiou]/gi, "-").split("-");

  // initiate a loop with an inside loop to go through each letter of each group and star to get the values compare w the abc
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      //     add each value to counter
      count += abc[arr[i][j]];
    }
    //   push each result to number holder
    numArr.push(count);
    //   re-start counter value
    count = 0;
  }
  //     get the biggest number in number holder array
  let getMax = Math.max(...numArr);
  return getMax;
}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));


// a better aproach with not loosing values get the same values
// instead of using replace using match and negating values /[^aeiou]+/gi
// function solve(s) {
//   let abc = {
//           a:1, b:2, c:3, d:4, e:5, f:6, g:7,
//           h:8, i:9, j:10, k:11, l:12, m:13,
//           n:14, o:15, p:16, q:17, r:18, s:19,
//           t:20, u:21, v:22, w:23, x:24, y:25,
//           z:26
//         }
//  let count = 0
//  let numArr = [] 
//  let arr = s.match(/[^aeiou]+/gi)
  

// for(let i = 0;i<arr.length;i++){
//   for(let j = 0; j <arr[i].length; j++){
// 			count += abc[arr[i][j]]
//   }
//   numArr.push(count)
//   count=0
// }
    
//  let getMax = Math.max(...numArr)
// return getMax
  
// };
// solve("chruschtschov")

// other approach
// const solve = s => {
// let ab = ['_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
//         subs = s.split(/[aeiou]/g);
//         let values = subs.map(el => el.split('').reduce((acc, val) => acc + ab.indexOf(val), 0));
//   return Math.max(...values);
// }

// not optimal too many .map
// function solve(s) {
//   let abc = {
//           a:1, b:2, c:3, d:4, e:5, f:6, g:7,
//           h:8, i:9, j:10, k:11, l:12, m:13,
//           n:14, o:15, p:16, q:17, r:18, s:19,
//           t:20, u:21, v:22, w:23, x:24, y:25,
//           z:26
//         }
//  let count = 0
//  let numArr = [] 
//  let arr = s.match(/[^aeiou]+/ig)
  

// arr = arr.map(e => e.split('')).map(e => e.map(e => abc[e])).map(e => e.reduce((a,c) => a+c,0))
    
//  let getMax = Math.max(...arr)
// return getMax
  
// };
// solve("chruschtschov")
