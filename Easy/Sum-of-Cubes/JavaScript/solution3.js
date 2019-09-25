function sumOfCubes(nums) {
	return nums.reduce((a,v) => a+(v*v*v),0)
}