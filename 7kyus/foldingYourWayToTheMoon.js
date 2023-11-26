function foldTo(distance) {
  let paperThickness = 0.0001;
  let count = 0;

  if (distance < 0) {
    return null;
  }
  
  for (let i = 1; paperThickness <= distance; i + 2) {
    paperThickness += paperThickness * i;
    count += i;
  }
  return count;
}
foldTo(384000000);
