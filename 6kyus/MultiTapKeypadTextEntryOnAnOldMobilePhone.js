function presses(phrase) {
  // To do...
  phrase = phrase.toLowerCase().split("");

  let keypads = {
    0: [" ", "0"],
    1: ["1"],
    2: ["a", "b", "c", "2"],
    3: ["d", "e", "f", "3"],
    4: ["g", "h", "i", "4"],
    5: ["j", "k", "l", "5"],
    6: ["m", "n", "o", "6"],
    7: ["p", "q", "r", "s", "7"],
    8: ["t", "u", "v", "8"],
    9: ["w", "x", "y", "z", "9"],
  };
  let rs = 0;
  for (const [k, v] in keypads) {
    for (let i = 0; i < phrase.length; i++) {
      if (keypads[k].includes(phrase[i])) {
        rs += keypads[k].indexOf(phrase[i]) + 1;
      }
    }
  }
  return rs;
}
console.log(presses("klk"));
