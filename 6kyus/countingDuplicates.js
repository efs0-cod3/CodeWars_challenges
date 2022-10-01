// p => string
// r => (a number) number of the duplicated letters not how many times they are duplicated
// e => duplicateCount("aabbcde"), 2 => a and b are duplicaded
// p = pseudo code =>

function duplicateCount(text) {
  //...
  // make case insensitive and split it into arr
  text = text.toLowerCase().split("");
  //   reduce each letter and verify if its in the arr more than once and add to the previous one counted
  text = text.reduce((acc, cur) => {
    return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
  }, {});
  //   set a variable to get all object values and filter them to get all the values greater than one and get its length.
  let q = Object.values(text).filter((el) => el > 1);

  return q.length;
}

//   with regex and methods

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}


// other method 
const duplicateCount = (string) => {
    // makes an array all lowercase and sorts the array in alpha order for easy comparrison
    let newString = string.toLowerCase().split('').sort();
    // this array will house the duplicated values so we can 
    // get the length of it (or the number of duplicated characters). 
    let newArray = []
    // set a loop for the array
    for(i = 0; i < newString.length; i++){
       // if the current element equals the following element the push it to the new array AND
       // ONLY if the new array doesn't already include the current element
       if(newString[i] === newString[i + 1] && !newArray.includes(newString[i])){
           // push elements to new array
           newArray.push(newString[i])
       }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
}