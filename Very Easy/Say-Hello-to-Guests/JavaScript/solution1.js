function greetPeople(names) {
	return names.map(n => `Hello ${n}`).join(', ');
}