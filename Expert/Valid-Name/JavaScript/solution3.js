function validName(name) {
	if (name.split(' ').length>3||name.split(' ').length<2) return false
	if ((name.split(' ').length==3)&&(name.split(' ')[1].length>name.split(' ')[0].length)) return false
	return /^[A-Z](\w+|\.)\s([A-Z](\w+|\.)).*([^\.]$)/.test(name)
}