function likes(names) {
  // TODO
  let result = "";
  if (names.length == 0) {
    result = "no one likes this";
  } else if (names.length >= 1) {
    if (names.length == 1) {
      result = names[0] + " likes this";
    }
    if (names.length == 2) {
      for (const n of names) {
        if (names.indexOf(n) != names.length - 1) {
          result += n;
        } else {
          result += " and " + n + " like this";
        }
      }
    } else if (names.length == 3) {
      for (const n of names) {
        if (names.indexOf(n) == names.length - 2) {
          result += n;
        } else if (names.indexOf(n) != names.length - 1) {
          result += n + ", ";
        } else {
          result += " and " + n + " like this";
        }
      }
    } else if (names.length >= 4) {
      let first2names = names.slice(0, 2);
      result =
        first2names.join(", ") +
        " and " +
        (names.length - first2names.length) +
        " others like this";
    }
  }
  return result;
}
likes(["p", "l", "k", "a"]);


function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}