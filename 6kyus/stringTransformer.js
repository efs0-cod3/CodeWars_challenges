// function stringTransformer(str) {
//   // Your code here
//   let catcher = [],
//     newWord = "",
//     strArr = str.split(" ");

//   function wordChecker(word) {
//     for (let i = 0; i < word.length; i++) {
//       word[i] == word[i].toLowerCase()
// ? (newWord += word[i].toUpperCase())
//         : (newWord += word[i].toLowerCase());
//     }
//     catcher.push(newWord);
//     newWord = "";
//   }

//   for (let w of strArr) {
//     wordChecker(w);
//   }

//   return catcher.reverse().join(" ");
// }

// console.log(stringTransformer('Example string'));

// function stringTransformer(str) {
//   // Your code here
//   let catcher = [],
//     newWord = "",
//     strArr = str.split(" ");

//   function wordChecker(word) {
//     word = word.split("");
//     word.forEach((l) => {
//       l == l.toLowerCase()
//         ? (newWord += l.toUpperCase())
//         : (newWord += l.toLowerCase());

//     });
//     catcher.push(newWord);
//     newWord = "";
//   }

//   for (let w of strArr) {
//     wordChecker(w);
//   }

//   return catcher.reverse().join(" ");
// }

// console.log(stringTransformer("Example string"));

function stringTransformer(str) {
  // Your code here
  let catcher = [],
    strArr = str.split(" ");

  function wordChecker(word) {
    word = word
      .split("")
      .map((l) => (l == l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()));
    catcher.push(word.join(""));
  }

  for (let w of strArr) {
    wordChecker(w);
  }

  return catcher.reverse().join(" ");
}

console.log(stringTransformer("Example string"));

// function stringTransformer(str) {
//   return str
//     .split(" ")
//     .reverse()
//     .join(" ")
//     .split("")
//     .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
//     .join("");
// }
