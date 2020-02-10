function highLow(str) {
  const num = str.split(' ');
  return [
    Math.max(...num),
    Math.min(...num),
  ].join(' ');
}