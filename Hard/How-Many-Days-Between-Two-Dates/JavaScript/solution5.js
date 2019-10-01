function getDays(date1, date2) {
	const oneDay = 24 * 60 * 60 * 1000;
	const firstDate = new Date(date1);
	const secondDate = new Date(date2);

	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	return diffDays
}