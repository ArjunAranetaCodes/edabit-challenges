function century(y){
	let c = Math.ceil(y/100)
	return c<21?c+"th century":c+"st century"
}