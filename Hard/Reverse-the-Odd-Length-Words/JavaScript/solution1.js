function reverseOdd(str) {
  return str.split(" ").map(w => w.length%2 ? [...w].reverse().join("") : w).join(" ");
}