const afterNMonths = (y, m) =>
	!y ? 'year missing' : !m ? 'month missing' : y + ~~(m / 12);