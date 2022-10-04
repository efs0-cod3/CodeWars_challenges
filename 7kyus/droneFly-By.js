function flyBy(lamps, drone) {
  drone = drone.split("");
  lamps = lamps.split("");
  let result = [];
  for (let i = 0; i < drone.length; i++) {
    lamps.splice(i, 0, "o");
    lamps.pop();
  }
  return lamps.join("");
}

const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);

function flyBy(lamps, drone) {
  return lamps
    .split("")
    .map((item, index, arr) => (index < drone.length ? "o" : item))
    .join("");
}

function flyBy(lamps, drone){
    for (letter of drone) {
       if (letter === '=' || letter === 'T')
         lamps = lamps.replace('x', 'o');
     }
     return lamps;
   }