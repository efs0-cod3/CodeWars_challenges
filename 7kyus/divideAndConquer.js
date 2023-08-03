function divCon(x) {
  const xNum = x
    .filter((el) => {
      if (typeof el == "number") {
        return el;
      }
    })
    .reduce((acc, cur) => acc + cur, 0);

  const xStr = x
    .filter((el) => {
      if (typeof el == "string") {
        return el;
      }
    })
    .reduce((acc, cur) => acc + Number(cur), 0);

  return xNum - xStr;
}

// function divCon(x) {
//   return x.reduce(
//     (acc, cur) => (typeof cur === "number" ? acc + cur : acc - Number(cur)),
//     0
//   );
// }
