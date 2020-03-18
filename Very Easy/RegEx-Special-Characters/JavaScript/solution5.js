function multiplyByLength(arr) {
	var ans = [];
	for (i = 0; i < arr.length; i++) {
		ans.push(arr[i] * arr.length);
	}
	return ans
}