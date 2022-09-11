const arr = N => [ /* the numbers 0 to N-1 */
...Array(N||0).keys()
];

function arr(n){
    var newArr = [];
    for(let i = 0; i < n; i++){
      newArr.push(i);
    }
    return newArr;
  }