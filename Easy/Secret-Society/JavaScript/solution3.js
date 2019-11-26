function societyName(friends) {
	return friends.map(m=>m[0]).sort().join('');
}