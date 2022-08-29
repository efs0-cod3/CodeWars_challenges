// p - a word
// r - return the indexes of the vowels staring form 1
// e - vowelIndices("apple"), [1,5]
// p - pseudo code
function vowelIndices(word) {
  //your code here
  //   make it case insensitive and split into arr
  word = word.toLowerCase().split("");
  // the letters to look for
  let v = ["a", "e", "i", "o", "u", "y"];
  //recipient of indexes
  let catcher = [];
  //   map the arr of word and get the index of every vowels in word and get its index if its > than -1
  word.map((e, i) => {
    if (v.indexOf(e) != -1) {
      catcher.push(i + 1); //add 1 to the captured index
    }
  });
  return catcher;
}

function vowelIndices(word) {
  var arr = [];
  for(var i = 0; i < word.length; i++) {
    if(/[aeioyu]/i.test(word[i])) {
      arr.push(i+1);
    }
  }
  return arr;
}

function vowelIndices(word){
  const str = 'aeiouy';
  const arr = word.toLowerCase().split('');
  let answer = [];
  arr.forEach((name, i) => {
    if (str.indexOf(name) !== -1) {
      answer.push(i + 1);
    }
  });
  return answer;
}