function halloween(dt) {
	var day = dt.getDate();
	var month = dt.getMonth();
  if(day === 31 && month === 9){
		return "Bonfire toffee";
	} else {
		return "toffee";
	}
}