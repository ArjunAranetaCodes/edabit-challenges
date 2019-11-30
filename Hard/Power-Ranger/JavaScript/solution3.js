function powerRanger(power, min, max) {
	let vals = 0
	for(let i=Math.ceil(Math.pow(min,1/power)); Math.pow(i,power)<=max; (i++,vals++));
	return vals
}