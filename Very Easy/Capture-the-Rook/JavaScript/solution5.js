function canCapture([yourRook, opponentsRook]) {
	var myRook = yourRook.split(''),
			otherRook = opponentsRook.split('');
	if(myRook[0] == otherRook[0] || myRook[1] == otherRook[1]){
		return true;
	} else {
		return false;
	}
}