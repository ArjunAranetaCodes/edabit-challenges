function validName(name) {
	var nameParts = name.split(" ");
	var status = true;
	
	if (nameParts.length > 3) return false;
	if (nameParts.length < 2) return false;
	if(!(name[0] === name[0].toUpperCase())) return false;
	if(!nameParts[0].endsWith(".")){
		if(nameParts.length > 2 && nameParts[2].endsWith(".")) return false;
	}
	if(nameParts[0].endsWith(".") && nameParts[0].length == 2){
		if(nameParts.length > 2 && !nameParts[1].endsWith(".")) return false;
	}
	
	for(var part of nameParts){
		if(part.endsWith(".")){
			if(part.length == 2 && (part[0] === part[0].toUpperCase())){
				status = true;	
			}else{
				status = false;
			}
			
		}
		if(part.length == 1){
			status = false;
		}
	}
	return status;
}