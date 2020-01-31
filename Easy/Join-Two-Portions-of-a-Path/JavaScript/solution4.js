function joinPath(portion1, portion2) {
	let p1 = portion1.includes('/')? portion1.slice(0,-1) : portion1
	let p2 = portion2.includes('/')? portion2.slice(1) : portion2
	return `${p1}/${p2}`
}