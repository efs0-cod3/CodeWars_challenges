function calc(x) {
  let total = [],
    total2 = "";

  for (let i = 0; i < x.length; i++) {
    total.push(x.charCodeAt(i));
  }

  let total1 = total
    .join("")
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);

  total2 = total
    .join("")
    .replaceAll("7", "1")
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);


  return total1 - total2;
}

console.log(calc("abcdef"));
console.log(calc("ifkhchlhfd"));


function calcBetter(x) {
    let total = [];
    let sum = (n) => n.split('').reduce((acc, cur) => acc + +cur, 0)
    
    for (let i = 0; i < x.length; i++) {
      total.push(x.charCodeAt(i));
    }
    
    let total1 = total
    .join("")
    let total2 = total
    .join("")
    .replaceAll("7", "1")
    
    
    
    return sum(total1) - sum(total2);
}
console.log(calcBetter("aaaaaddddr"));