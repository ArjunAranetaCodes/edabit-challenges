const canConcatenate = (a, t) =>
 a.flat().reduce((a,b)=> a+b) === t.reduce((a,b)=>a+b);