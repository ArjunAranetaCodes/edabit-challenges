function canCapture([yourRook, opponentsRook]) {
	[ yourRow , yourCol] =  [yourRook[0] , yourRook[1]];
	[ opponentsRow , opponentsCol] = [opponentsRook[0] , opponentsRook[1]];
	return (yourRow == opponentsRow) || (yourCol == opponentsCol);
}