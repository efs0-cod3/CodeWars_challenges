// P - str of words
// R - number of letters of the smallest word in the sentence.
// E - "bitcoin take over the world maybe who knows perhaps" => who = 3
// P - split str in arr
//     map the length of each element
//     return. math min and spread the arr in it to get the min

function findShort(s){
    s = s.split(' ')
    let catcher = []
    s.map(el => catcher.push(el.length))
    return Math.min(...catcher)
   }