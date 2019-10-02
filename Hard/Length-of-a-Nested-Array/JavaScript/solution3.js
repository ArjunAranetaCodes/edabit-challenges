function getLength(arr) {
  return arr.length === 0 ? 0 : JSON.stringify(arr).match(/\w/g).length || 0;
}