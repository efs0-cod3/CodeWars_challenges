function well(x) {
  const goodCount = x.filter((el) => el == "good").length;
  return x > 2 ? "I smell a series!" : x >= 1 ? "Publish!" : "Fail!";
}
well("good", "bad", "bad", "bad", "bad", "good", "good");
