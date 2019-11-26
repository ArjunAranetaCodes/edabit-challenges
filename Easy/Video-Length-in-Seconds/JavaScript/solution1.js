const minutesToSeconds = time => {
	let [minutes, seconds] = time.split(":").map(Number);
	return seconds < 60 ? (minutes * 60) + seconds : false;
}