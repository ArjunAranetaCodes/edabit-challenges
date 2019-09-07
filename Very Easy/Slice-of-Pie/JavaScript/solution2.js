function equalSlices(total, people, each) {
	if(people * each <= total) {
		return true;
	} else {
		return false;
	}
}