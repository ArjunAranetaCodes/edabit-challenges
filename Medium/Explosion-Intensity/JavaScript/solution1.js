const boomIntensity = n => {
	if (n < 2) return 'boom';
	const boom = 'B' + 'o'.repeat(n) + 'm' + (!(n % 2) ? '!' : '');
	return !(n % 5) ? boom.toUpperCase() : boom;
};