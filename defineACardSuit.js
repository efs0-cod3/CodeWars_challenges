function defineSuit(card) {
  // good luck
  card = card.split(""); //split into an array
  let result = "";
  // get last index of array with slice(-1) and compare it to the card club
  if (card.slice(-1) == "♠") {
    result = "spades";
  } else if (card.slice(-1) == "♦") {
    result = "diamonds";
  } else if (card.slice(-1) == "♥") {
    result = "hearts";
  } else if (card.slice(-1) == "♣") {
    result = "clubs";
  }
  return result;
}
// switch statement
function defineSuit(card) {
  switch (card.slice(-1)) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}
