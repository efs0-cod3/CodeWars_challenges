// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let result;
  let d = dadYearsOld;
  let s = sonYearsOld;

  if (d > s * 2) {
    result = d - s * 2;
  } else if (d < s * 2) {
    result = s * 2 - d;
  } else {
    result = 0;
  }
  return result;
}
