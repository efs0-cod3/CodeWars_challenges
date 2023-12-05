function isPythagoreanTriple(integers) {
    // Good luck friends!
    integers = integers.sort((a,b) => a-b)
  
    let aPlusBSqr = integers[0] ** 2 + integers[1] ** 2
    let cSqr = Math.pow(integers[2],2)
  
    return aPlusBSqr === cSqr 
  }
  console.log(isPythagoreanTriple([35, 39, 13]));
  console.log(isPythagoreanTriple([5, 12, 13]));