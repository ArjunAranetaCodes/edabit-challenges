function sortByLength(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      var temp = array[j]
      if (array[j].length > array[j + 1].length) {
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}