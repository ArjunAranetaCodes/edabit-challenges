function hasIdentical(arr) {
	let rowL = arr.length, rows = [];
	let colL = arr[0].length, cols = [];

	if(rowL !== colL){
			return false;
	}
	arr.map(x => rows.push(x))
	let i = 0, j;

	while(i < rowL){
			let c = [];
			j = 0;
			while(j < colL){
					c.push(arr[j][i]);
					j++;
			}
			cols.push(c)
			i++;
	}
	
	rows = rows.map(x => x.join(""))
	cols = cols.map(x => x.join(""))

	let found = false;
	for(let c of cols){
			if(rows.includes(c)){
					found = true;
			}
	}
	return found;
}