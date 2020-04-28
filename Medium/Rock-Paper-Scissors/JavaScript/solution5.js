function rps(p1, p2) {
	var winner = "p2"
	if(p1 === "Rock" && p2 === "Scissors"){
		winner = "p1"
	}
	if(p1 === "Scissors" && p2 === "Paper"){
		winner = "p1"
	}
	if(p1 === "Paper" && p2 === "Rock"){
		winner = "p1"
	}
	if(p1 === p2){
		return "It\'s a draw"
	}
	return "The winner is " + winner
}