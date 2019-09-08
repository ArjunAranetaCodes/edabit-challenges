function equalSlices(total, people, each) {
	if (!people) return true;
	return people * each <= total;
}