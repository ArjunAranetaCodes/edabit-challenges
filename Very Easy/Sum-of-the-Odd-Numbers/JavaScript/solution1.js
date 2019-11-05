function addOddToN(n) {
	if(n === 1) return 1
  return n + addOddToN(n - 2)
}