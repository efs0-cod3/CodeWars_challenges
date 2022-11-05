function generateShape(int){
    //   return "+"; // your code here
    let numOfPlus = int * int;
    let result = "";
    let catcher =  [];
    for (let i = 1; i <= numOfPlus; i++) {
      result += "+";
      if (result.length === int) {
        catcher.push(result);
        result = "";
      }
    }
    return catcher.join("\n");
  }

  console.log(generateShape(3));