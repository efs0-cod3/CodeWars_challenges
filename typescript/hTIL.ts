// Head, Tail, Init and Last
// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x



export const head = (arr: number[]): number => {
  return arr[0];
};

export const tail = (arr: number[]): number[] => {
  return arr.slice(1);
};

export const init = (arr: number[]): number[] => {
  return arr.slice(0, arr.length - 1);
};

export const last = (arr: number[]): number => {
  return arr[arr.length - 1];
};


