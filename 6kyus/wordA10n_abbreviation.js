// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
//     A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
//     The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"

function abbreviate(string) {
  // ...
  string = string.split(" ");
  let newAbr = [];
  let dashArr = [];
  let lL, middle, abr;
  string.forEach((w) => {
    if (w.length >= 4) {
      if (w.includes("-")) {
        w = w.split("-").map((item) => {
          abr = `${item.charAt(0)}${item.length - 2}${item.charAt(
            item.length - 1
          )}`;
          dashArr.push(abr);
        });
        newAbr.push(dashArr.join("-"));
        console.log(dashArr.join("-"));
      } else {
        let fL = w[0];
        lL = w.includes(",") ? w.slice(-2) : w.slice(-1);
        middle = w.includes(",") ? w.length - 3 : w.length - 2;
        abr = `${fL}${middle}${lL}`;
        newAbr.push(abr);
      }
    } else {
      newAbr.push(w);
    }
  });
  return newAbr.join(" ");
}
abbreviate("elephant-mouse");

// SHORTER WAY NOT MINE
function abbreviate(string) {
    return string.replace(/\w{4,}/g, function(word) {
      return word[0] + (word.length - 2) + word.slice(-1);
    });
  }