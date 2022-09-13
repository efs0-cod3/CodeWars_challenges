function mango(q, p) {
  let m = 0;
  let total;
  for (let i = 1; i <= q; i++) {
    if (i % 3 === 0) {
      m++;
    }
  }
  total = (q - m) * p;
  return total;
}

function mango(quantity, price) {
  return price * (quantity - Math.floor(quantity / 3));
}
