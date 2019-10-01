function getDays(date1, date2) {
	return new Date(date2 - date1).getDate() - 1
}