const rps = (p1, p2) => {
	dic = {Rock: 'Scissors', Scissors: 'Paper', Paper: 'Rock'};
	return p1==p2? "It's a draw" : `The winner is p${2-(dic[p1]==p2)}`;
};