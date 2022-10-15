// Boolean
export var var1Boolean: boolean = true;
// TODO:
//  number
export const var2Decimal: number = 13;
export const var3Hex: number = 0xf00d;
export const var4Binary: number = 63;
export const var5Octal: number = 484;
// string
export const var6String: string = "Hello, world!";
// array
export const var7Array: [number, string, { a: number }, number, number] = [
  1,
  "test",
  { a: 3 },
  4,
  5,
];
export const var8NumericArray: number[] = [1, 2, 3, 4, 5];
// tuple
export const var9Tuple: [string, number] = ["key", 12345];
// enums
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
export const var10Enum: Color = Color.Blue;
export const var11ArrayOfAny: any[] = [1, "test", { a: 3 }, 4, 5];
export const var12VoidFunction: () => void = () => {};
export const var13Null: null = null;
export const var14Undefined: undefined = undefined;
export const var15NeverFunction = (): never => {
  throw new Error("it doesnt work");
};
