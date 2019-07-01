function canNest(arr1, arr2) {
	arr1.sort() ;
    arr2.sort() ;

    return(((arr1[0] > arr2[0]) && (arr1[arr1.length-1] < arr2[arr2.length-1])) ? true:false) ;   
}