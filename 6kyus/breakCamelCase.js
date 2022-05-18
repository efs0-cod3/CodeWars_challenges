function solution(string) {
  return string.split('').map(letter => {
    if (letter === letter.toUpperCase()) {
      return " " + letter
    } else
      return letter
  }).join('')
}