function specialReverse(s, c) {
	var arrStr = s.split(" ")
	for(var x = 0; x < arrStr.length; x++){
		if(arrStr[x].includes(c)){
			arrStr[x] = arrStr[x].split("").reverse().join("")
		}
	}
	return arrStr.join(" ")
}