function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  // your code
  let allAges = [age1, age2, age3, age4, age5, age6, age7, age8];
  let allTog = allAges.map((e) => e * e).reduce((a, b) => a + b);
  return Math.floor(Math.sqrt(allTog) / 2);
}
predictAge(65, 60, 75, 55, 60, 63, 64, 45);
