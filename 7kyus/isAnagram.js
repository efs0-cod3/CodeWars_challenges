// 100

// write the function isAnagram

// P => got two strings to check if they are anagram for each other
// R => boolean 
// E => "foefet" == "toffee" => true
// P => make it case insensitive,
//      split str into arr, 
//      sort them and join them into a str.
//      compare the strings.

var isAnagram = function(test, original) {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
      
    return test == original

    };

// isAnagram('test','tste')
// 8/07/2