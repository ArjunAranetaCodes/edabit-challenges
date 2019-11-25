function societyName(friends) {
	return friends.map( person => person[0].toUpperCase() )
		           .sort()
		           .join('');
}