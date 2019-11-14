function stringFret(st, fr){
	console.log("test", st, fr)
	var frets = ['C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B']
	var arrString = ['E', 'B', 'G', 'D', 'A', 'E']
	if(st < 1 || st > 6 || fr < 0 || fr > 24){
		return "Invalid input"
	}else{
	  var stValue = arrString[st - 1]
		var fretInd = frets.indexOf(stValue)
		console.log(fretInd, st, stValue)
		if(fr == 0) return frets[fretInd]
		while(fr > 0){
			fretInd++
			if(fretInd > 11){
				fretInd = 0
			}
			fr--
			if(fr == 0){
				return frets[fretInd]
			}
		}
	}
}