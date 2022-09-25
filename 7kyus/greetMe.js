var greet = function(name) {
    let fLetter = name.slice(0,1).toUpperCase()
    let rest = name.slice(1).toLowerCase()
    return `Hello ${fLetter}${rest}!`
  };
  greet('riley')