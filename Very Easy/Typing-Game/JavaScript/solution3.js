function correctStream(user, correct) {
	return correct.map((w, i) => user[i] === w ? 1 : -1);
}