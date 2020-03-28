function rogerShots(arr) {
	let bottlesShoot = 0
	let time = 0
	for (let shot of arr) {
		if (shot === "Bang!") {
			bottlesShoot++
			time+=0.5
		}
		if (shot === "BangBang!"){
			bottlesShoot+=2
			time+=0.5
		}
		if (bottlesShoot >= 6) break
	}
	return time
}