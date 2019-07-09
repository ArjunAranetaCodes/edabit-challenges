function validName(name) {
	let nameArr = name.split(' ');
    
    if(nameArr.length === 3) {
        
        let [a,b,c] = nameArr;
        
        // check capitalization
        if((a[0] == a[0].toLowerCase()) || (b[0] == b[0].toLowerCase()) || (c[0] == c[0].toLowerCase())) {
            return false;
        }
        
        //check if last name is a word
        if(c.length < 3) {
            return false;
        }
        
        //check if middle name is expanded while first name is initial
        if(a.length == 2 && b.length > 2) {
            return false;
        }
        
        //check if there is a period after a word
        if( (a.length>2 && a[a.length-1]=='.') || (b.length>2 && b[b.length-1]=='.') || (c.length>2 && c[c.length-1]=='.')) {
            return false;
        }
        
        //check if there's no period after initial
        if((a.length < 2) || (b.length < 2) || (c.length < 2)) {
            return false;
        }
        
        else return true;
    }
    
    else if(nameArr.length === 2) {
        let [a,b] = nameArr;
        
        //check if only initials
        if((a.length == 2) && (b.length==2)) {
            return false;
        }
        
        //check lowercase
        if((a[0] == a[0].toLowerCase()) || (b[0] == b[0].toLowerCase())) {
            return false;
        }
        
        //check if last name is a word
        if(b.length < 3) {
            return false;
        }
        
        if((a.length == 1) || (b.length == 1)) {
            return false;
        }
        
        if((a.length > 2) && (a[a.length-1]=='.')) {
            return false;
        }
        else return true;
    }
    
    // check single names
    else if(nameArr.length === 1){
        return false;
    }
    
    //check other cases
    else {
        return false;
    }
}