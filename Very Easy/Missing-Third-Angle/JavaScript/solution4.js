function missingAngle(angle1, angle2) {
	return 180 - angle1 - angle2 < 90 ? "acute" : 180 - angle1 - angle2 === 90 ? "right" : "obtuse";
}