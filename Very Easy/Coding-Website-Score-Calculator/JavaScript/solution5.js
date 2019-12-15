function scoreCalculator(easy, med, hard) {
	if(easy < 0 || med < 0 || hard < 0){
		return "invalid"
	}else{
		return (easy * 5) + (med * 10) + (hard * 20)
	}
}