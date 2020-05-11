function halloween(dt) {
	const currDate = new Date(dt);
	if(currDate.getMonth() === 9 && currDate.getDate() === 31){
		return "Bonfire toffee"
	}else{
		return "toffee"
	}
}