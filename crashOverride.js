// const firstName = {
//   A: 'Alpha',
//   B: 'Beta',
//   C: 'Cache',
//   D: 'Data',
//   E: 'Energy',
//   F: 'Function',
//   G: 'Glitch',
//   H: 'Half-life',
//   I: 'Ice',
//   J: 'Java',
//   K: 'Keystroke',
//   L: 'Logic',
//   M: 'Malware',
//   N: 'Nagware',
//   O: 'OS',
//   P: 'Phishing',
//   Q: 'Quantum',
//   R: 'RAD',
//   S: 'Strike',
//   T: 'Trojan',
//   U: 'Ultraviolet',
//   V: 'Vanilla',
//   W: 'WiFi',
//   X: 'Xerox',
//   Y: 'Y',
//   Z: 'Zero',
// }

// const lastName = {
//   A: 'Analogue',
//   B: 'Bomb',
//   C: 'Catalyst',
//   D: 'Discharge',
//   E: 'Electron',
//   F: 'Faraday',
//   G: 'Gig',
//   H: 'Hacker',
//   I: 'IP',
//   J: 'Jabber',
//   K: 'Killer',
//   L: 'Lazer',
//   M: 'Mike',
//   N: 'n00b',
//   O: 'Overclock',
//   P: 'Payload',
//   Q: 'Quark',
//   R: 'Roy',
//   S: 'Spy',
//   T: 'T-Rex',
//   U: 'Unit',
//   V: 'Virus',
//   W: 'Worm',
//   X: 'X',
//   Y: 'Yob',
//   Z: 'Zombie',
// }

function aliasGen(fN, sN) {
  // Code Here
  fN = fN.slice(0, 1).toUpperCase();
  sN = sN.slice(0, 1).toUpperCase();
  let search = Object.keys(firstName);
  if (!search.includes(fN) || !search.includes(sN)) {
    return "Your name must start with a letter from A - Z.";
  } else {
    let aliases = Object.entries(firstName);
    let surAliases = Object.entries(surname);

    let firstAlias = aliases
      .filter(([k, v]) => {
        if (k == fN) {
          return v;
        }
      })
      .map((el) => el[1]);

    let secondAlias = surAliases
      .filter(([k, v]) => {
        if (k == sN) {
          return v;
        }
      })
      .map((el) => el[1]);
    return firstAlias + " " + secondAlias;
  }
}

// other solution
function aliasGen() {
  let fName = firstName[arguments[0][0].toUpperCase()];
  let sName = surname[arguments[1][0].toUpperCase()];
  return fName && sName
    ? `${fName} ${sName}`
    : `Your name must start with a letter from A - Z.`;
}
