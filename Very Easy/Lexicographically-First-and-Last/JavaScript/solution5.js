const firstAndLast = s => {
	const arr = [];
	arr.push([...s].sort().join(''))
	arr.push([...s].sort().reverse().join(''))
	
	return arr;
}