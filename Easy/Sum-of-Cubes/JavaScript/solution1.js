function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}