const notes = `C,C#/Db,D,D#/Eb,E,F,F#/Gb,G,G#/Ab,A,A#/Bb,B`.split`,`,
			offSet = [4, -1, -5, 2, -3, 4],
			rem = n => (n + 12) % 12;

const stringFret = (st, fr) =>
	st < 1 || st > 6 || fr < 0 || fr > 24 ? `Invalid input` :
	notes[rem(offSet[st - 1] + fr)];