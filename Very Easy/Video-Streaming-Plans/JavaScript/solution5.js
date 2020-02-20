function missingAngle(angle1, angle2) {
	var angle = 180 - (angle1 + angle2)
	if(angle < 90){
		return "acute"
	}else if(angle > 90){
		return "obtuse"
	}else if(angle == 90){
		return "right"
	}
}