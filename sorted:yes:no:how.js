function isSortedAndHow(array) {
  const asc = array.slice().sort((a, b) => a - b);

  return array.toString() == asc.toString()
    ? "yes, ascending"
    : array.toString() == asc.reverse().toString()
    ? "yes, descending"
    : "no";
}
