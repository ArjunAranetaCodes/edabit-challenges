function correctStream(user, correct) {
	var a = [];
	
	for(let i = 0; i < user.length; i++) {
		if(user[i] === correct[i]) {
			a.push(1)
		} else {
			a.push(-1);
		}
	}
	return a
}