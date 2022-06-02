function sortArray(array) {
    let odd = array.filter((n) => n % 2).sort((a, b) => a-b);
    return array.map((n) => (n % 2 ? odd.shift() : n));
  }
  sortArray([5, 3, 2, 8, 1, 4])