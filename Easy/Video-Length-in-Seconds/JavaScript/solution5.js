const minutesToSeconds = time => 
 ([m, s] = time.split(':'))[1] >= 60 ? false : +m*60 + +s