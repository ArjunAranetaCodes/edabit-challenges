function missingAngle(angle1, angle2) {
	var a = 180 - angle1 - angle2;
	if (a < 90) return 'acute';
	if (a > 90) return 'obtuse';
	return 'right';
}