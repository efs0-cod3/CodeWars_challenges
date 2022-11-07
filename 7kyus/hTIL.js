const head = (arr)=> {
    return arr[0];
  };
  
  const tail = (arr) => {
    return arr.slice(1);
  };
  
  const init = (arr) => {
    return arr.slice(0, arr.length - 1);
  };
  
  const last = (arr) => {
    return arr[arr.length - 1];
  };

  head([5,1]);
  tail([1]);
  init([1,5,7,9]);
  last([7,2]);