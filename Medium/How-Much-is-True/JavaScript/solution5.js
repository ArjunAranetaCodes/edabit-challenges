function count_true(lst){
	return lst.filter(function(value){
    return value === true;
	}).length    
}