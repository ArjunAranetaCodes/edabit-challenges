function societyName(friends) {
	friends.sort()
	var society = ""
	for(var x = 0; x < friends.length; x++){
		society = society + friends[x].charAt(0)
	}
	return society.toUpperCase()
}