export function generateShape(int: number): string {
  //   return "+"; // your code here
  let numOfPlus: number = int * int;
  let result: string = "";
  let catcher: string[] = [];
  for (let i = 1; i <= numOfPlus; i++) {
    result += "+";
    if (result.length === int) {
      catcher.push(result);
      result = "";
    }
  }

  console.log(catcher.join("\n"));
  return catcher.join("\n");
}
