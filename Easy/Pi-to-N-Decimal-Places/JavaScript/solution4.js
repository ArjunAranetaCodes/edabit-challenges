function sumOfCubes(nums) {
	var sum = 0;
	var l = nums.length;
	for (var i = 0; i < l; i++){
		sum += Math.pow(nums[i],3);
	}
	return sum;
}