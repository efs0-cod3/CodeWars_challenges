// P -> three params int 
// R -> sum of the sequence
// E -> 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// P -> for loop to go through the seq, i+= step.
//      new arr to push the iteration.
//      reduce method to make the calculation.

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    let catcher = [];
    if (begin > end) return 0;
    else {
        for (let i = begin; i <= end; i += step) {
            catcher.push(i)
        }
    }
    return catcher.reduce((a, b) => a + b, 0)
};




//  100Dvs '0.0'  