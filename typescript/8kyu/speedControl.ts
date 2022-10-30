export const gps = (s: number, xs: number[]): number => {
  // your code
  const pr: Array<Array<number>> = [];
  const sp: Array<number> = [];

  if (xs.length <= 1) {
    return 0;
  } else {
    for (let i: number = 0; i < xs.length - 1; i++) {
      pr.push([xs[i], xs[i + 1]]);
    }
  }

  for (let d: number = 0; d < pr.length; d++) {
    sp.push((3600 * (pr[d][1] - pr[d][0])) / s);
  }

  return Math.floor(Math.max(...sp));
};

gps(12,[0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25])