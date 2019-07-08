function whichIsLarger(f, g) {
	let [fr, gr] = [f(), g()];
	return fr > gr ? 'f' : fr < gr ? 'g' : 'neither';
}