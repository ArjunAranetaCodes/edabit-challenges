function diffMaxMin(arr) {
	var largest = arr[0];
	var smallest = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i]
		}
		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	return largest - smallest;
}