function calculateTip(amount, rating) {
  let percent;
  let tip;
  rating = rating.toUpperCase();
  switch (rating) {
    case "TERRIBLE":
      percent = 0;
      tip = amount * percent;
      return tip;
    case "POOR":
      percent = 5;
      tip = Math.ceil(amount * (percent / 100));
      return tip;
    case "GOOD":
      percent = 10;
      tip = Math.ceil(amount * (percent / 100));
      return tip;
    case "GREAT":
      percent = 15;
      tip = Math.ceil(amount * (percent / 100));
      return tip;
    case "EXCELLENT":
      percent = 20;
      tip = Math.ceil(amount * (percent / 100));
      return tip;
    default:
      tip = "Rating not recognised";
      return tip;
  }
}
