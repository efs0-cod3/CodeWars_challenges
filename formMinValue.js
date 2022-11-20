function minValue(values){
    //your code here
    let noDup = [...new Set(values)]
    return Number(noDup.sort().join(''))
  }

  function minValue(values){
    const n = values
      .filter((e, i, arr) => arr.indexOf(e) === i)
      .sort()
      .join('');
    return Number(n);
  }