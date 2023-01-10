function alphabetWar(fight) {
  let rS = 0,
    lS = 0,
    leftSide = { w: 4, p: 3, b: 2, s: 1 },
    rightSide = { m: 4, q: 3, d: 2, z: 1 };

  for (let i = 0; i < fight.length; i++) {
    if (Object.keys(leftSide).includes(fight[i])) {
      lS += leftSide[fight[i]];
    } else if (Object.keys(rightSide).includes(fight[i])) {
      rS += rightSide[fight[i]];
    }
  }
  return lS > rS
    ? "Left side wins!"
    : lS < rS
    ? "Right side wins!"
    : "Let's fight again!";
}

console.log(alphabetWar("z")) 
console.log(alphabetWar("zdqmwpbs"))
console.log(alphabetWar("zzzzs"))
console.log(alphabetWar("wwwwww"))