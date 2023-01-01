function array(arr) {
  //Good luck
  arr = arr.split(",");
  return arr.length <= 2 ? null : arr.slice(1, -1).join(" ");
}
