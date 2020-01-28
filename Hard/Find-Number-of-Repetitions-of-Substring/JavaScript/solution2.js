function numberOfRepeats(str) {
  return str.length / new Set(str).size;
}