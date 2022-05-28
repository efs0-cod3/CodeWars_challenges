// P - an array
// R - arra elem order by length
// E - ["Telescopes", "Glasses", "Eyes", "Monocles"] => ["eyes", Glasses,...]
// P - use sort method and params length

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length - b.length)
  };