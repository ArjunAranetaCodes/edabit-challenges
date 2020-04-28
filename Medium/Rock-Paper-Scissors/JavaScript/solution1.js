function rps(p1, p2) {
  let w = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock"
  }
  if (p1 === p2) return "It's a draw"
	return `The winner is ${w[p1] === p2 ? 'p1' : 'p2'}` 
}