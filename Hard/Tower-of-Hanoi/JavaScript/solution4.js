function towerHanoi(discs) {
	return discs == 0 ? 0 : 2*towerHanoi(discs-1)+1;
}