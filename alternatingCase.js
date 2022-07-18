String.prototype.toAlternatingCase = function () {
  // Define your method here :)
let s = this.split('')
let catcher = []
for(let i = 0; i < s.length; i++){
  if(s[i] == s[i].toUpperCase()){
    catcher.push(s[i].toLowerCase())
  }else catcher.push(s[i].toUpperCase())
}
  return catcher.join('')
  }