function wallpaper(l, w, h) {
    // your code 
    numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

  if(l === 0 || w === 0) return 'zero' 
  
  let roArea = 2 * (l + w) * h
  let rollA = .52 * 10
  
  let rollsReq = Math.ceil(roArea / rollA * 1.15)

  return numbers[rollsReq]
}
console.log(wallpaper(6.3, 4.5, 2.29));