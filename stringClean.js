function stringClean(s){
    // Function will return the cleaned string
    let rgx = /\d/g //it will target all digits
    return s.replace(rgx, '')
  }