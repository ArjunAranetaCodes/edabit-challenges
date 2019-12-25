function pHName(ph) {
	if (ph>14||ph<0) return 'invalid';
	if (ph<7) return 'acidic';
	if (ph>7) return 'alkaline';
	return 'neutral';
}