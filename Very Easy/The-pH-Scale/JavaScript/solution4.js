function pHName(pH) {
	if(pH === 7){
		return "neutral"
	}else if(pH < 7 && pH > 0){
		return "acidic"
	}else if(pH > 7 && pH <= 14){
		return "alkaline"
	}else{
		return "invalid"
	}
}