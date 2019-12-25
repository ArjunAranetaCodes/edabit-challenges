function pHName(pH) {
	return pH < 0 || pH > 14 ? "invalid" : pH === 7 ? "neutral" : pH <= 6 ? "acidic" : "alkaline"  
}