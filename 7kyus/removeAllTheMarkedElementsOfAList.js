// Remove All The Marked Elements of a List

// Array.prototype.remove_ = function (integer_list, values_list) {
//   //your code here
//   //   loop through the values list
//   for (let valElem of values_list) {
//     //    filter each element from IntList that matches with each valElem
//     integer_list = integer_list.filter((intList) => intList != valElem);
//   }

//   return integer_list;
// };

Array.prototype.remove_ = function (integer_list, values_list) {
    //your code here
    return integer_list.filter(elem => !values_list.includes(elem));
  };

console.log(Array.prototype.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8],[1, 3, 4, 2]));