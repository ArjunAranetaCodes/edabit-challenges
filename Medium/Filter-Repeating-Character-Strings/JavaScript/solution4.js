function identicalFilter(arr) {
	var newArr = [];
	for(value of arr){
		
		if(value.split('').every(char => char === value[0])){
			newArr.push(value)
		}else if(value.toString().length == 1){
			newArr.push(value)
		}
	}   
	return newArr;
}