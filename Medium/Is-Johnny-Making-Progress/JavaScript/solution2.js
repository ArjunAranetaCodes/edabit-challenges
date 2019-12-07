function progressDays(runs) {
	var days=0;
	for(i =1; i<runs.length; i++){
		if(runs[i]>runs[i-1]){
			days++;
		} 
	}
	return days;
}