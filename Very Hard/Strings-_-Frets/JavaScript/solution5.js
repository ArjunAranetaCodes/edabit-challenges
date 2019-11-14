function stringFret(st, fr){
	var stringsArr = ["E","B","G","D","A","E"];
	var fretsArr = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", 
									"G", "G#/Ab", "A", "A#/Bb", "B"];
	if(st > 0 && st < 7 && fr > -1 && fr < 24) {
		var startIndex = fretsArr.indexOf(stringsArr[st - 1]);
		var fretIndex = (startIndex + fr)%12;
		return fretsArr[fretIndex];
	} else {
		return "Invalid input";
	}
}