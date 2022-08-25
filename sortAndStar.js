function twoSort(s) {
  return s.sort()[0].split("").join("***");
}
twoSort([
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]);

function twoSort(s) {
  var word = s.sort()[0];
  var result = "";
  for (var i=0; i<word.length; i++) {
    result += word[i];
    if (i != word.length - 1) {
      result += "***";
    }
  }
  return result;
}