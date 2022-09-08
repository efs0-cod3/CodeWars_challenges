function titleCase(title, minorWords) {
  let result = "";
  let arr = []; //recipient
  let tsplit = title.toLowerCase().split(" "); //split title into arr all lowercase
  if (minorWords == undefined) {
    // if not minorWords
    for (let t of tsplit) {
      //split each word and capitalize each word
      t = t.substring(0, 1).toUpperCase() + t.slice(1);
      //push to arr
      arr.push(t);
    }
  } else if (minorWords !== undefined) {
    // if minorWords is not undefined. split into arr and lower cased
    let minorsplt = minorWords.toLowerCase().split(" ");
    for (let t of tsplit) {
      //             compare t (each title word) against minors
      if (!minorsplt.includes(t)) {
        //               if minor doesnt includes t, capitalize t
        t = t.substring(0, 1).toUpperCase() + t.slice(1);
        //               and push t to arr
        arr.push(t);
      } else {
        //               push t lowercased
        arr.push(t);
      }
    }
  }
  result = arr.join(" "); // join arr with a space
  //make first letter uppercase and the rest capitalized
  return result.substring(0, 1).toUpperCase() + result.slice(1);
}

console.log(
  titleCase("a clash of KINGS", "a an the of"),
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  titleCase("the quick brown fox")
);

function titleCase(title, minorWords) {
  const minorArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  return title
    .toLowerCase()
    .split(" ")
    .map((word, i) => {
      if (!word) return word;
      if (minorArr.indexOf(word) !== -1 && i !== 0) return word;

      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
