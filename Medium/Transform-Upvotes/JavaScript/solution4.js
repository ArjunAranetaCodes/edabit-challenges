function transformUpvotes(str) {
	return str.split(' ').map(element => element.endsWith('k') ? parseFloat(element)*1000 : parseFloat(element));
}