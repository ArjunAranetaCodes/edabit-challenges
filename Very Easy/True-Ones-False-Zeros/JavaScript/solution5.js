function correctStream(user, correct) {
	var newArr = []
	for(var x = 0; x < user.length; x++){
		if(user[x] === correct[x]){
			newArr.push(1)
		}else{
			newArr.push(-1)
		}
	}
	return newArr
}