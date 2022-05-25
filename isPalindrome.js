// P - str
// R - boolean if is palindrome or not. 
//     (palindome => word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar.)
// E - aba - aba = true; hello - olleh
// P - make it case insensitive (toLowerCase)
//     split, reverse it and join (x) 
//     compare values
function isPalindrome(x) {
    // your code here
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}