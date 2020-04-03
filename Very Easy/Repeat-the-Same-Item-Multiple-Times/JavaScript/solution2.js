function canCapture([yourRook, opponentsRook]) {
	return opponentsRook.includes(yourRook[0]) || opponentsRook.includes(yourRook[1]) ? true : false
}