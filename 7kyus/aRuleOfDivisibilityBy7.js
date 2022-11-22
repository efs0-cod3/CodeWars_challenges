function seven(m)  {
  // your code
   let step = 0
   let result = m
   

  while(result.toString().length > 2 ){
   let strArr = result.toString().split('')
   let lastDigit = Number(strArr.pop())
   let number = Number(strArr.join(''))
       result = number - (lastDigit*2)
       step++
       }
  return [result,step]
    
}