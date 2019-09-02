function length(str, num = 0) {
	 if(str[num] === undefined) {
		 return num
	 }
	return length(str, num + 1)
}