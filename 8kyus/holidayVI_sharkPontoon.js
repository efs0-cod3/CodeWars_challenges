function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  sharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
  let meTime = pontoonDistance / youSpeed;
  let sTime = sharkDistance / sharkSpeed;
  return meTime < sTime ? "Alive!" : "Shark Bait!";
}
