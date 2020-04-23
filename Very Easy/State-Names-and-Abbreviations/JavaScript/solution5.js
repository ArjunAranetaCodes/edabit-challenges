function filterStateNames(arr, type) {
	var newArr = []
	for(var x = 0; x < arr.length; x++){
				if(type === "abb" && arr[x].length === 2){
					newArr.push(arr[x])	 	
				}
				if(type === "full" && arr[x].length !== 2){
					newArr.push(arr[x])	 	
				}
	}
	return newArr
}