function mxdiflg(a1, a2) {
    // your code
  a1 = a1.map(el => el.length)
  a2 = a2.map(el => el.length)
  
  if(a1 == '' || a2 == '') return -1
    else{
        return Math.max(Math.max(...a1) - Math.min(...a2), Math.max(...a2) - Math.min(...a1))
    }
}