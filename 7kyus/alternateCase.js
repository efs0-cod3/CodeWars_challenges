function alternateCase(s) {
  return s
    .split("")
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");
}
console.log(alternateCase("Hello World"));
