function sortContacts(names, sort) {
	if(names === undefined || names === null || names.length < 1) return []
	if(sort === "ASC") return names.sort(compareAsc)
	if(sort === "DESC") return names.sort(compareDesc)
	
}

function compareAsc(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
}
function compareDesc(a, b) {
    var splitA = a.split(" ");
    var splitB = b.split(" ");
    var lastA = splitA[splitA.length - 1];
    var lastB = splitB[splitB.length - 1];

    if (lastA > lastB) return -1;
    if (lastA < lastB) return 1;
    return 0;
}