const canNest = (arr1, arr2) =>
  Math.min(...arr1) > Math.min(...arr2) &&
  Math.max(...arr1) < Math.max(...arr2);