function towerHanoi(discs) {
	count = 0
	move(discs, "A", "B", "C");
	return count
}

var count = 0
function move(n, a, b, c) {	
  if (n >= 1) {
    move(n-1, a, c, b);
    move(n-1, b, a, c);
		count++
  }
	return count
}