export function countRedBeads(n: number): number {
  if (n < 2) return 0;
  return n * 2 - 2;
}
countRedBeads(3);
