function smallEnough(a, limit){
    const isSmallOrEqual = (curr) => curr <= limit;
    return a.every(isSmallOrEqual)
  }