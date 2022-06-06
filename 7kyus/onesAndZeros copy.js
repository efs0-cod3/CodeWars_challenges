
// My solution

const binaryArrayToNumber = arr => {
    // your code
    let join = arr.join('')
    return parseInt(join, 2)
};




// other way
const binaryArrayToNumber1 = arr => {
    // your code
    //array recieved as argument
    //reverse array to begin at first digit
    //loop through array
    //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
    //add numbers to variable | return variable

    arr.reverse();
    var count = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            count += Math.pow(2, i);
        }


    }

    return count;


};