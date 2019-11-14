const notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
const open = [4, 11, 7, 2, 9, 4];

function stringFret(st, fr) {
	if (st < 1 || 6 < st || fr < 0 || 24 < fr) return "Invalid input";
	return notes[(open[st - 1] + fr) % 12];
}