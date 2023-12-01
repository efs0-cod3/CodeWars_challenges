function padIt(str, n) {
  //coding here
  let i = 1;
  str = str.split();
  while (i <= n) {
    if (i % 2 != 0) {
      str.unshift("*");
    } else {
      str.push("*");
    }
    i++;
  }
  return str.join("");
}

console.log(padIt("a", 5));



function padItDoWhile(str, n) {
    //coding here
    let i = 1

    do {
        str = i % 2 ? "*" + str : str + "*"
        i++ 
    } while (i <= n);

    return str
  
  }
  console.log(padItDoWhile("a", 5));