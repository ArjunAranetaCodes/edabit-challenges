function minutesToSeconds(time) {
	let [m,s] = time.split(":").map(Number)
	if(s>=60) return false
	return m*60+s
}