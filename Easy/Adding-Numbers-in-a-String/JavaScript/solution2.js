const maximumScore = obj => 
	  obj.reduce((a, {score}) => a + score, 0);