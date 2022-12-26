export const arrayPlusArray = (arr1 : number[], arr2 : number[]) : number => {
    return arr1.concat(arr2).reduce((acc,cur) => acc+cur,0); // something went wrong ?
  }