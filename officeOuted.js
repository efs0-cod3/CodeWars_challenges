function outed(meet, boss) {
  //   get the values from meet
  const values = Object.values(meet);
  //   get the average of all values + boss value (boss value is double but still being one person) / values length
  const avg = (values.reduce((a, b) => a + b, 0) + meet[boss]) / values.length;

  return avg <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
