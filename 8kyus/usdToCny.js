function usdcny(usd) {
    const convRate = 6.75
    const result = usd * convRate
    return `${result.toFixed(2)} Chinese Yuan`
    
  }
  console.log(usdcny(1466));