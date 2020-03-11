function findLargestNum(arr) {
  return arr.sort((a, b) => b - a)[0]
}