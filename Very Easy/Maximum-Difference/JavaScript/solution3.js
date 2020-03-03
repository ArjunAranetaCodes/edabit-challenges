function difference(nums) {
	nums.sort((a, b) => a - b);
	let myArray = [nums[0], nums[nums.length-1]];
	var x = myArray[1] - myArray[0];
	return(x);
}