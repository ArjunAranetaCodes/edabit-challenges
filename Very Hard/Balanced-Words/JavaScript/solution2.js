const wordScore = str =>
  str
    .split('')
    .reduce(
      (total, char) => total + (char.charCodeAt(0) - 'a'.charCodeAt(0) + 1),
      0
    );

const balanced = word =>
  wordScore(word.slice(0, word.length / 2)) ===
  wordScore(word.slice(-word.length / 2));