function rogerShots(arr) {
	var sum = 0.0
	for(var x = 0; x < arr.length; x++){
		if(arr[x] === "Bang!" || arr[x] === "BangBang!"){
			sum = sum + .5
		}
	}
	return sum
}