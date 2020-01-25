const diceGame = a => 
 a.every(i => i[0] !== i[1]) ? a.flat(Infinity).reduce((a,b) => a + b) : 0;