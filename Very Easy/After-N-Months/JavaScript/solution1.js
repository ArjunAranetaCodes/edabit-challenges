const afterNMonths = (y, m) => {
	return !y ? "year missing" : !m ? "month missing"
				 : y + Math.floor(m / 12);
}