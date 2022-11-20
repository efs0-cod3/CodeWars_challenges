function average(scores){
    // code for calculating average
  return Math.round(scores.reduce((a,b) => a+b)/scores.length)
}
console.log(average([49,3,5,300,7]));