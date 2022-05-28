// P - two params, arr and a num
// R - boolean
// E - arr avr < num = true
// P - push val into arr, reduce the arr
//   - divide result by arr.length()
//   - compare values

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
  classPoints.push(yourPoints)
  let sum = classPoints.reduce( ( acc , cur ) => acc + cur, 0)
  let avg = sum / classPoints.length
  return avg < yourPoints
  }
  
  
  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
  classPoints.push(yourPoints)
 return classPoints.reduce( ( acc , cur ) => acc + cur, 0) / classPoints.length < yourPoints
  }

