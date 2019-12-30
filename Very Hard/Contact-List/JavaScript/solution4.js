function sortContacts(names, sort) {
	if (!names) return [];
	return names.sort(function(a,b){
		var aa = a.split(/\s/);
		var bb = b.split(/\s/);
		console.log(aa[1],bb[1]);
		if (sort == 'ASC') return aa[1] > bb[1] ? 1 : 0;
		return bb[1] > aa[1] ? 1 : 0;
	});
}