const century = y => {
	let c = Math.ceil(y/100); 
	return	`${c}${c==21?"st":"th"} century`;
};