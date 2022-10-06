// P = array
// R = str
// E = Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
// Pseudo code
function warnTheSheep(queue) {
  //   reverse de queue to start from the end.
  queue = queue.reverse();
  //   if wolf is first... talk to wolf
  if (queue[0] == "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    //     alert the sheep previous to the wolf
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] == "sheep" && queue[i + 1] == "wolf") {
        return `Oi! Sheep number ${
          i + 1
        }! You are about to be eaten by a wolf!`;
      }
    }
  }
}
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));

function warnTheSheepA(queue) {
  return queue[queue.length] == "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${queue.length - queue.indexOf(
        "wolf"
      ) - 1 }! You are about to be eaten by a wolf!`;
}
console.log(warnTheSheepA(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));