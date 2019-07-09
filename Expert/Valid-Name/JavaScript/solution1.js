function validName(name) {
	return /^([A-Z]\.( [A-Z]\.)?|[A-Z]\w+ [A-Z]\w+|[A-Z]\w+ [A-Z]\.)( [A-Z]\w+)$/.test(name)
}