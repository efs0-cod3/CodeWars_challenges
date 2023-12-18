function closeCompare(a, b, margin = 0){
  // ...
  let comparison = Math.abs(a - b)
  
  return margin >= comparison ? 0 : a < b ? -1 : 1 
}

console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));