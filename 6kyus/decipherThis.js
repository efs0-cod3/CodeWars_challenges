function decipherThis(str) {
  //have fun!
  // get a regex to match all the "numbers" 
  const rgx = /\d+/g;
  // get an array for rgx matches
  const matches = str.match(rgx);
  // loop on each match to replace with the String.fromCharCode to get the character
  matches.forEach((element) => {
    str = str.replace(element, String.fromCharCode(element));
  });

  // convert the str to arr
  str = str.split(' ')
  // a new arr to catch all the word once deciphered
  const newStr = []

  // loop on each word to decipher it
  for (let i = 0; i < str.length; i++){
    if (str[i].length < 3) {
      newStr.push(str[i]);
    }else{
      // extract the characters needed with the substring method
      const fw = str[i].substring(0,1);
      const lmodw = str[i].substring(str[i].length-1);
      const restmodw = (str[i].length > 2) ? str[i].substring(2,str[i].length-1) : '';
      const smod = (str[i].length > 2) ? str[i].substring(2,1) : '';

      // get all the extractions together and push it to the newStr
      const all = fw+lmodw+restmodw+smod;
      newStr.push(all);
    };
  }

  // .join() the [newStr] to make it a str
  return newStr.join(' ')
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);

// with map and rgx
/**
 * The `decipherThisMap` function takes a string as input, splits it into words, replaces the first
 * character of each word with its corresponding ASCII character, and swaps the second and last
 * characters of each word, then returns the modified string.
 * @param str - The `str` parameter is a string that represents a map. Each word in the map is encoded
 * using a specific pattern. The function `decipherThisMap` aims to decode the map and return the
 * decoded version.
 * @returns The function `decipherThisMap` returns a modified version of the input string `str`.
 */
function decipherThisMap(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
console.log(
  decipherThisMap("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);