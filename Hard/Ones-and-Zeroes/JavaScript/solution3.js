function sameLength(s) {
	const arr = s.match(/(1+|0+)/g);
  return arr.every((a, index) => index % 2 !== 0 ? a.length === arr[index - 1].length: true) && arr.length % 2 === 0;
}