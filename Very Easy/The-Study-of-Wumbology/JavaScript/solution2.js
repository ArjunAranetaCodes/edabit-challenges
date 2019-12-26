function wumbo(words) {
  return words
    .split("")
    .map(x => (x === "M" ? "W" : x))
    .join("");
}