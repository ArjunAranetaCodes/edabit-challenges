function unlucky13(nums) {
	var arr = [];
for(i in nums){
	if(nums[i]%13 != 0){
		arr.push(nums[i]);
	}
}
	return arr;
}