function containAllRots(strng, arr) {
  // your code
  let strToArr = [...strng];
  const allRotations = [];

//   const rots = [...strng].map((_, i) => strng.slice(i) + strng.slice(0, i));
 
for (let i = 0; i < strToArr.length; i++) {
      let last = strToArr.pop();
      strToArr.unshift(last);
      allRotations.push(strToArr.join(""));
    }
    // console.log({rots,allRotations});
    
  const verifing = allRotations
    .map((el) => {
      return arr.includes(el);
    })
    .filter((el) => el == true);

  return verifing.length == allRotations.length;
}
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));


// shorter approach
function containAllRotsS(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}
console.log(containAllRotsS("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]));