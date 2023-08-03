function toFreud(string) {
  let result = [];
  if (!string) {
    return "";
  }
  string.split(" ").forEach((el) => result.push("sex"));
  return result.join(" ");
}



// var toFreudd=s=>s.replace(/[^ ]+/g,'sex')


// const toFreuddd = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')