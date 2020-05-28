function formatDate(date) {
	const [month, day, year] = date.split("/")
	return `${year}${day}${month}`
}