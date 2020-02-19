function missingAngle(angle1, angle2) {
	return angle1 + angle2 < 90 ? 'obtuse'
		: angle1 + angle2 > 90 ? 'acute'
		: 'right';
}