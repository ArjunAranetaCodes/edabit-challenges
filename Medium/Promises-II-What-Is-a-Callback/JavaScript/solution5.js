function diceGame(arr) {
	var newArr = arr.flat(Infinity)
	var sum = 0
	for(var x = 0; x < newArr.length; x++){
		if(newArr[x] === newArr[x+1]){
			return 0
		}else{
			sum = sum + newArr[x]
		}
	}
	return sum
}