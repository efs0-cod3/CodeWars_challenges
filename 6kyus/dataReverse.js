function dataReverse(data) {
  // Your code here
  let bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
}

const dataReverse = (a) =>
  a.join``.match(/\d{8}/g).reverse().join``.split``.map(Number);

const dataReverse = (data) => {
  const result = [];

  while (data.length) {
    result.push(...data.splice(-8));
  }

  return result;
};

function dataReverse(data) {
  const reverseData = [];

  for (let i = data.length; i > 0; i -= 8) {
    const segment = data.slice(i - 8, i);
    reverseData.push(...segment);
  }
  return reverseData;
}
