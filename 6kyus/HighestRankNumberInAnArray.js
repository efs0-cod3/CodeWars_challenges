// Complete the method which returns the number which is most frequent in the given input array. 
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.

// arr of nums, nums can be repeated, 
// in case two nums are repeated the same 
// amount of times return the highest
function highestRank(arr){
    //Your Code logic should written here
      
    //   iterate over the nums and transforms it into obj 
    //   and get the times it is repeated 
     arr = arr.reduce((acc, cur) => {
        return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc
      }, {})
    
    // return the highest repeated key and 
    // if they are 2 repeated the same amount of times get the higher one
    // ass it will return a key make it a number
     return Number(Object.keys(arr).reduce((a, b) => arr[a] > arr[b] ? a : b))
    }
    console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));


    // Another one

    const highestRank = arr => {
        let nums = {};
        arr.forEach(el => {
            nums[el] ? nums[el]++ : nums[el] = 1
        })   
        
        return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
    }