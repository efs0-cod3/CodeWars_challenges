export function toFreud(string: string): string {
  let result: string[] = [];
  if (!string) {
    return "";
  }
  string.split(" ").forEach((el) => result.push("sex"));
  return result.join(" ");
}

toFreud('oye ahira');
