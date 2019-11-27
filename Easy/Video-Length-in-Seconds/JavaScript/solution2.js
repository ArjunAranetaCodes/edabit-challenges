const minutesToSeconds = t => 
 t.split(':')[1] >= 60 ? false :
 t.split(':').reduce((a,b) => (60 * a) + +b);