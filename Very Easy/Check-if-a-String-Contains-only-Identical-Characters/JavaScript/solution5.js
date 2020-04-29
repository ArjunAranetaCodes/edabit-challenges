const minusOne = arr => {
	let result = [].concat(...arr);
	result.pop();
  return result;
}