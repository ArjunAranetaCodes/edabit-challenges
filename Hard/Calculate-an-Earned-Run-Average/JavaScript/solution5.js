function era(er, ip) {
	const era = er / ip * 9;
	return era % 1 === 0 ?
		era.toFixed(2) : String(era).match(/^.{4}/).join("");
}