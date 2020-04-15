function unlucky13(nums) {
	return nums.filter(num => num %  13 !== 0);
}