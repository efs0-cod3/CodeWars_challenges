function maxRot(n) {
  // your code
  //   anotate the max num
  let max = n;
  // transform the num to string and split it into an arr
  n = n.toString().split("");
  // loop
  for (let i = 0; i < n.length; i++) {
    // take the i and send it to the end untill loop ends
    let s = n.splice(i, 1).join("");
    n.push(s);
    // join that array to and make it a number
    let num = +n.join("");
    // compare num agains max and if bigger make max that num
    if (num > max) max = num;
  }

  return max;
}
console.log(maxRot(12355123));
