const sliceSum = (arr, n) => arr.reduce((a, v, i) => i < n? a + v : a, 0);