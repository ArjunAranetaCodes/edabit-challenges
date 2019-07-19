function getEquivalent(note) {
	let o = {
		"Ab" : "G#",
		"Bb" : "A#",
		"Cb" : "B#",
		"Db" : "C#",
		"Eb" : "D#",
		"Fb" : "E#",
		"Gb" : "F#"
	};
	return o[note] ? o[note] : Object.keys(o).find(x => o[x] == note);
}