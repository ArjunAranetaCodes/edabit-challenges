function numberOfRepeats(str) {
	let i = str.length-str.lastIndexOf(str[0]);
  let sub = str.slice(0,i);
  return str.replace(RegExp(`(${sub})`,'gi'),'x').length
}