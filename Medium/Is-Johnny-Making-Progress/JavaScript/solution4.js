function progressDays(runs) {
	let progress = 0
  runs.forEach((num, i) => num < runs[i+1] ? progress++ : null)
  return progress
}