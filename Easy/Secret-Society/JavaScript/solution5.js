function societyName(friends) {
	var codeName=[];
	for(var i = 0; i < friends.length; i++)
		{
			codeName.push(friends[i][0].toUpperCase());
		}
			var ret=codeName.sort();
			var d="";
	for(var i=0; i<ret.length;i++)
		{
			d+=ret[i];
		}
	return d;
}