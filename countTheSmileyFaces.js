//return the total number of smiling faces in the array
function countSmileys(arr) {
  console.log(arr);
  let smilesCounted = 0;
  let valid = [
    ":)",
    ":D",
    ";D",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ";-)",
    ":-D",
    ";-D",
    ";~D",
    ":~D",
  ];
  for (const s of arr) {
    if (valid.includes(s)) {
      smilesCounted++;
      console.log(s);
    }
  }
  console.log(smilesCounted);
  return smilesCounted;
}
countSmileys([':D',':~)',';~D',':)'])