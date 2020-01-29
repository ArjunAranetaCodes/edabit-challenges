function happy(n) {
	while (n !==4 && n !==1){
		n=[...''+n].map(e=>Math.pow(e,2)).reduce((acc, cur)=>acc+ cur,0)
	}
	return n ===1 ?true :false
}