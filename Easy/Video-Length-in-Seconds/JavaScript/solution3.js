const minutesToSeconds = time => {
	const [minutes, seconds] = time.split(':').map(Number);
	return (seconds > 59) ? false : seconds + minutes * 60;
};