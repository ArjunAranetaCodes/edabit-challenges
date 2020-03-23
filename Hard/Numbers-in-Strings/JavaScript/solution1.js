function canConcatenate(arr, target) {
  return [].concat(...arr).sort().join('') === target.sort().join('');
}