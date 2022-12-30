export function well(x: string[]): string {
  const goodsAmount: number = x.filter((item) => item === "good").length;
  return goodsAmount == 0
    ? "Fail!"
    : goodsAmount <= 2
    ? "Publish!"
    : "I smell a series!";
}
