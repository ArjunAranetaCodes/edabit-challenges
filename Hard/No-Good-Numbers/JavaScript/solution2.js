function howBad(num) {
	return pop=[...(num >>> 0).toString(2)].filter(x=>x=='1').length,['Evil,Odious,'.repeat(100).split(',')[pop]].concat(pop>=2?Object.keys([...Array(pop)]).slice(2).some(x=>Number.isInteger(pop/x))?null:['Pernicious']:null).filter(Boolean)
}