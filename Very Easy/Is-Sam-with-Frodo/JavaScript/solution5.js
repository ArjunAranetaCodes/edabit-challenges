function nextElement(arr) {
  const arr1 = arr[arr.length - 1];
  const arr2 = arr[arr.length - 2];
  return (arr1 - arr2) + arr1;
}