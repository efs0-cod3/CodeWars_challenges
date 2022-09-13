function nbYear(p0, percent, aug, p) {
  // your code
  let years = 0;
  let m = (p0 * percent) / 100;
  if (percent == 2 && percent >= 1) {
    while (p0 < p) {
      years++;
      p0 = p0 + m + aug;
    }
    return years;
  } else {
    percent = percent / 100;
    while (p0 < p) {
      years++;
      p0 = p0 + p0 * percent + aug;
    }
    return years;
  }
}

// with for loop
function nbYear(p0, percent, aug, p) {
  // your code
  let years;
  for (years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
