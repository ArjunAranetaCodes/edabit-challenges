function validName(name) {
	if (/^([A-Z]\. )+[A-Z]\w+$/.test(name)) return true;
	if (/^[A-Z]\w+ [A-Z]\. [A-Z]\w+$/.test(name)) return true;
	if (/^[A-Z]\w+ [A-Z]\w+ [A-Z]\w+$/.test(name)) return true;
	return false;
}