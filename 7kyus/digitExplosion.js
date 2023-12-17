function explode(s) {
  let sN = [...s];
  let catcher = [];
  for (let i = 0; i < sN.length; i++) {
    for (let k = 1; k <= Number(sN[i]); k++) {
      catcher.push(sN[i]);
    }
  }
  return catcher.join("");
}

strToExplode = [["312"], ["102269"], ["0"], ["000"], ["123"]];

for(const [str] of strToExplode){
  console.log(explode(str));
}


// other ways //

function explodeMap(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

//  or

function explodeRgx(s) {
  return s.replace(/\d/g, d => d.repeat(d));
}