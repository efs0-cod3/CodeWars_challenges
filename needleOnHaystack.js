// P -> array
// R -> str with index of needle
// E -> ['arr','needle','car'] => `found the needle at position 1}`
// P -> as we know what are we looking for we can use
//      array method indexOf() and get the index of needle in arr

function findNeedle(haystack) {
    // your code here
    let index = haystack.indexOf('needle')
  return `found the needle at position ${index}`
  }