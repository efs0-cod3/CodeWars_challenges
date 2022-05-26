function abbrevName(name) {
  // code away
  name = name.split('')
  let firstInitial = name[0] + '.';
  let secondInitial = '';
  for (let l = 0; l < name.length; l++) {
    if (name[l] == ' ') {
      secondInitial = name[l + 1]
    }
  }
  return (firstInitial + secondInitial).toUpperCase()
}