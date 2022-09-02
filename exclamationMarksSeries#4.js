function remove(string) {
  //coding and coding....
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "!") {
      word += string[i];
    }
  }
  return word + "!";
}
