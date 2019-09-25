const sumOfCubes = nums => {
	return nums.reduce((sum, num) => {
		return sum + Math.pow(num,3);
	},0)
}