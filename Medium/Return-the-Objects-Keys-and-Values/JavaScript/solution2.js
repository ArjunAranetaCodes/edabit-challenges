function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map(x => obj[x])];
}