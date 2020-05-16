function abcmath(a, b, c) {
	while(b>0)
		{
			a = a+a;
			b--;
		}
	return (a%c===0);
}