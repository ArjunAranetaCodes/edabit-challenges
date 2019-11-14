function stringFret(st, fr){
	const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]
	const openStringNote = [4, 11, 7, 2, 9, 4]
	
	if (st < 1 || st > 6 || fr < 0 || fr > 24) return "Invalid input"
	return notes[(openStringNote[st - 1] + fr) % 12]
}