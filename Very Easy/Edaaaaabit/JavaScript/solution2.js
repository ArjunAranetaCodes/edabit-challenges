function hurdleJump(hurdles, jumpHeight) {
	return hurdles.every(h => jumpHeight >= h)
}