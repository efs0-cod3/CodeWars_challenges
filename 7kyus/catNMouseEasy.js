function catMouse(x){
    return x.split('').filter(el => el == ".").length > 3 ? 'Escaped!' : "Caught!"
  }