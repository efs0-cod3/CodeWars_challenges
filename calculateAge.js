function calculateAge(a, b) {
  // enter your code here.
  // return a > b ? `You will be born in ${a-b} years.`: a == b ? "You were born this very year!" :`You are ${b-a} years old.` if (a > b){
  if (a > b) {
    if (a - b == 1) {
      return `You will be born in ${a - b} year.`;
    } else {
      return `You will be born in ${a - b} years.`;
    }
  } else if (a < b) {
    if (b - a == 1) {
      return `You are ${b - a} year old.`;
    } else {
      return `You are ${b - a} years old.`;
    }
  } else {
    return "You were born this very year!";
  }
}
console.log(calculateAge(500,360));

// other solution
const calculateAges = (a, b) =>
  a < b
    ? `You are ${b - a} year${b - a > 1 ? `s` : ``} old.`
    : a > b
    ? `You will be born in ${a - b} year${a - b > 1 ? `s` : ``}.`
    : `You were born this very year!`;

console.log(calculateAges(500,350));