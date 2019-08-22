const greaterThanOne = fraction => {
	const [numerator, denominator] = fraction.split('/');
	return numerator / denominator > 1;
};