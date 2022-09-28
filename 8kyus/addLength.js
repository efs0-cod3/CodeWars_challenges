function addLength(str) {
  //start-here
  let arrWLength = [];
  str = str.split(" ");
  str.forEach((el) => arrWLength.push(el + ` ${el.length}`));
  return arrWLength;
}

// with map
function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
  }