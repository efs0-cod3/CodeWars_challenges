function min(arr, toReturn) {
  // TODO
  // P => An array and the desired value to be returned
  // R => A number
  // E =>  min([1,2,3,4,5], 'value'), 1 / min([1,2,3,4,5], 'index'), 0
  // P =>

  //   compare toReturn to set the method to be used.

  const min = Math.min(...arr);

  return toReturn === "value" ? min : arr.indexOf(min);
}
