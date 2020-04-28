function rps(p1, p2) {
	const wins = ['RockScissors', 'PaperRock', 'ScissorsPaper'];
  	return p1 === p2 ? "It's a draw" : `The winner is ${wins.includes(p1 + p2) ? 'p1' : 'p2'}`; 
}