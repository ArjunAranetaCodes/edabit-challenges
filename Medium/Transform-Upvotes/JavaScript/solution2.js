const transformUpvotes = s => s.split(" ").map(x =>
	+(x.replace(".", "").replace("k", "00")));