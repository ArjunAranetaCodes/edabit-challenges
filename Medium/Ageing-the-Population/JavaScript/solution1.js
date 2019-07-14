const afterNYears = (list, n) => {
	for (let person in list) list[person] += Math.abs(n);
	return list;
}