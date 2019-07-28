function sumDigProd(...numbers) {
	const argLength = arguments.length
	var sum = 0;
	for(var x = 0; x < argLength; x++){
		sum = sum + numbers[x];
	}
	while(sum.toString().length !== 1){
	  var product = 1;
		var strSum = sum.toString();
		for(var x = 0; x < strSum.length; x++){
			product = product * strSum[x];
		}
		sum = product;
	}
	if(sum.toString().length == 1){
		return sum;
	}
	return product;
}