export function apple(x: number | string): string {
    return Math.pow(Number(x),2) >= 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }

//   second solution 
  export function apple2(x: number | string): string {
    let val: number;
    // making an x type checking!
    if(typeof x === 'string'){
        val = parseInt(x)
    } else {
        val = x
    }

    return val ** 2 >= 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.' ;
  }