function sevenBoom(arr) {
	var new_arr= arr.join('')
	if(new_arr.includes(7)){
		return "Boom!";
	}else{
		return "there is no 7 in the array";
	}
}