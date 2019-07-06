function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}