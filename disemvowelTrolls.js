function disemvowel(str) {
    let result = [];
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i += 1) {
      if (!vowels.includes(str[i].toLowerCase())) {
        result.push(str[i]);
      }
    }
    return result.join('');
  }

//   regex
function disemvowell(str) {
    return str.replace(/[aeiou]/gi, '');
  }