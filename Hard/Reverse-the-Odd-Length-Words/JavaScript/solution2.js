function reverseOdd(str) {
	var newArr = str.split(" ")
	var arrWords = []
	for(var x = 0; x < newArr.length; x++){
		if(newArr[x].length % 2 == 1){
			arrWords.push(newArr[x].split("").reverse().join(""))
		}else{
			arrWords.push(newArr[x])
		}
	}
	return arrWords.join(" ")
}