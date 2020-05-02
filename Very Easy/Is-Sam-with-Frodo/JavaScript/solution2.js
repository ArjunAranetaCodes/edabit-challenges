const nextElement = arr => {
	const [secondLast, last] = arr.slice(-2);
	return last + (last - secondLast);
}