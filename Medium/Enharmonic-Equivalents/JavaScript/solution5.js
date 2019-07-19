function getEquivalent(note) {
	const notesOne = ['C#', 'D#', 'F#', 'G#', 'A#'];
	const notesTwo = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];
	
	if (notesOne.includes(note)) return notesTwo[notesOne.indexOf(note)];
	if (notesTwo.includes(note)) return notesOne[notesTwo.indexOf(note)];
}