// p => 4 params
// r => number
// e => calculateYears(1000, 0.05, 0.18, 1100), 3
// p => code ...
function calculateYears(principal, interest, tax, desired) {
    // your code
  let y = 0 //counter
  let earnings 
  while (principal < desired){
    earnings = (principal * interest) // 0.05% of principal
    principal += earnings // sum earnings to principal
    y++ // count a year each time principal not equal or more than desired
    principal -= (earnings * tax) // reduce tax from earnings and subtract form principal 
  }
  return y
}