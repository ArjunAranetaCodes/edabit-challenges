function rps(p1, p2) {
	let obj = {
		Rock: 'Scissors',
		Scissors: 'Paper',
		Paper: 'Rock'
	}
	return p1 === p2 ? "It's a draw" : obj[p1] === p2 ? "The winner is p1" : "The winner is p2";
}