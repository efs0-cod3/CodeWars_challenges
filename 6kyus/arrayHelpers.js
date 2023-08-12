// TODO
Object.assign(Array.prototype, {
  square() {
    return this.map((num) => num * num);
  },
  cube() {
    return this.map((num) => num ** 3);
  },
  average() {
    return this.reduce((acc, cur) => acc + cur, 0) / this.length;
  },
  sum() {
    return this.reduce((acc, cur) => acc + cur, 0);
  },
  even() {
    return this.filter((num) => num % 2 === 0);
  },
  odd() {
    return this.filter((num) => num % 2 === 1);
  },
});

const numbers = [2, 3, 4, 5, 6];
