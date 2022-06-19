// str
// str reverse avoinding char that are not letters
// "krishan" -> "nahsirk" if it has other character ommit str = "ultr53o?n" -> "nortlu".
//  create arr with allowed characters
//  create empty arr
//  split str into arr and reverse it
//  make a nested loop  to compare str with allowed chars then join
function reverseLetter(str) {
  //coding and coding..
  let allowed = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let newStr = [];
  str = str.split("").reverse();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < allowed.length; j++) {
      if (str[i] == allowed[j]) {
        newStr.push(str[i]);
      }
    }
  }
  return newStr.join("");
}
