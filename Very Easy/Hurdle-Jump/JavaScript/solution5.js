function hurdleJump(hurdles, jumpHeight) {
	for(i=0;i<hurdles.length;i++){
		if(jumpHeight < hurdles[i])
			return false;
	}
	return true;
}