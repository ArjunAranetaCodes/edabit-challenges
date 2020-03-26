const x = n => v => v.split('.')[n];
const [
	retrieveMajor,
	retrieveMinor,
	retrievePatch,
] = [x(0), x(1), x(2)];