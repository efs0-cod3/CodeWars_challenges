// P -> array
// R -> array with elements that  are not in de params array
// E -> ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
//      ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
//      returning arr -> ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// P ->  loop or method
// 			 check if birds includes geese
//  		 push to new arr


function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let newArr = [];
    // return an array containing all of the strings in the input array except those that match strings in geese
    for (let bird of birds) {
        if (!geese.includes(bird))
            newArr.push(bird)
    }
    return newArr
};
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
