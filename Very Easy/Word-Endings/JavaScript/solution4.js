function isFourLetters(arr) {
  return arr.filter(function(str) {
    return str.length === 4;
  });
}