function correctStream(user, correct) {
	return user.map(u => correct.indexOf(u) > -1 ? 1 : -1);
}