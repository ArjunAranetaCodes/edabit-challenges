function maxTotal(nums) {
	return nums.sort((a, b)=> b-a).slice(0,5).reduce((a, b)=> a+b)
}