function toFreud(string) {
  let result = [];
  if (!string) {
    return "";
  }
  string.split(" ").forEach((el) => result.push("sex"));
  return result.join(" ");
}
