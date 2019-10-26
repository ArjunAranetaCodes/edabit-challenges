function addIndexes(arr) {
	return arr.map(addind);
	function addind(value, index) {
		return value + index;
	}
}