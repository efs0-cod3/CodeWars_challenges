function meeting(x) {
  console.log(x.length);
    return x.includes("O") ? x.indexOf("O") : "None available!";
  
}
console.log(meeting(['X','O','X','X','X']));
