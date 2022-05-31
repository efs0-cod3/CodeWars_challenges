// P - number of petals
// R - str
// E - 3 => passionately
// P - number of petals minus 1 bc theres a default response
//     get the modulo of 6 (number of frases)
//  result will be number 0-5 get te response
function howMuchILoveYou(nbPetals) {
    // your code
    switch ((nbPetals - 1) % 6) {
        case 1:
            return "a little";
        case 2:
            return "a lot";
        case 3:
            return "passionately";
        case 4:
            return "madly";
        case 5:
            return "not at all";
        default:
            return "I love you";
    }
}


// other way
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]
function howMuchILoveYou(n) {
    return phrases[(n - 1) % phrases.length]
}
