const maxTotal = T => T.sort((d,x)=>d-x).slice(-5).reduce((t,e)=>t+=e,0)