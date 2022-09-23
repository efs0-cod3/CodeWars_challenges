function calculator(a, b, sign) {
  let result;
  //   isolate params values and identify it type with typeof method
  if (typeof a != "number" || typeof b != "number") {
    result = "unknown value";
  } else {
    //   use switch to identify value of sign if its different from '+,-,*,/' return unknown value
    switch (sign) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = a / b;
        break;
      default:
        result = "unknown value";
    }
  }
  return result;
}

function calculator(a, b, sign) {
  var oper = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };
  return oper[sign] ? oper[sign] : "unknown value";
}
