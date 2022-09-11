function whatday(num) {
  // put your code here
  let day = "";
  switch (num) {
    case 1:
      day = "Sunday";
      break;
    case 2:
      day = "Monday";
      break;
    case 3:
      day = "Tuesday";
      break;
    case 4:
      day = "Wednesday";
      break;
    case 5:
      day = "Thursday";
      break;
    case 6:
      day = "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      day = "Wrong, please enter a number between 1 and 7";
  }
  return day;
}
