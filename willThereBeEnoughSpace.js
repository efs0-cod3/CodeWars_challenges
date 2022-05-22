// P - 3 params 'cap' capacity, ppl 'on' bus, ppl 'wait' waiting
// R - number of ppl that will be left w/out seat
// E - cap = 10, on = 5, wait = 5 --> 0 / cap = 100, on = 60, wait = 50 --> 10.
// P -  compare capacity against ppl waiting + pob 
function enough(cap, on, wait) {
    // your code here
    let total = on + wait
  return cap > total ? 0 : total - cap
  
  }