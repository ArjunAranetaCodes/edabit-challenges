function hashPlusCount(str) {
	return ['#', '+'].map(c => [...str].filter(l => l === c).length);
}