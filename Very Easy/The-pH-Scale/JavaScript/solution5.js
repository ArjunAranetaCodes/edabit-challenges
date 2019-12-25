function pHName(pH) {
	if (pH < 7 && pH >= 0){
		return "acidic";
	}
	if (pH > 7 && pH <=14){
		return "alkaline"
	}
	if (pH == 7){
		return "neutral";
	}
	else{
		return "invalid";
	}
	
}