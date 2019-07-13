function emptySq(step) {
	return step <= 1 ? 0 : step * (step - 1) * 4;
}