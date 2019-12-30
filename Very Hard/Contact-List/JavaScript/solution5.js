function sortContacts(names, sort) {
	if(!names) return []
	const compare = (a,b)=>a.split` `[1].localeCompare(b.split` `[1])
	return names.sort((a,b)=>sort==='ASC'?compare(a,b):compare(b,a))
}