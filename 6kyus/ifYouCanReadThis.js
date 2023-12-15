function to_nato(words) {
  // Go code
  let natolize = "";
  const NATO = {
    A: "Alfa",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "Xray",
    Y: "Yankee",
    Z: "Zulu",
    "!": "!",
    ".": ".",
    ",": ",",
    "?": "?",
  };

  let w = [...words];
  w.forEach((letter) => {
    if (letter != " ") {
      natolize += NATO[letter.toUpperCase()] + " ";
    }
  });

  return natolize.trimEnd();
}
