function combinations(items) {
	let args = Array.from(arguments);
	let perms = 1;
	for(var x = 0; x < args.length; x++){
		if(args[x] > 0){
			perms = perms * args[x]
		}
	}
	return perms
}