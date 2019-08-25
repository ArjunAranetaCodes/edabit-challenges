const isSidePass = (a, b, c) => a + b > c;

const isTriangle = (a, b, c) => isSidePass(a ,b, c) 
&& isSidePass(b, c, a) 
&& isSidePass(c, a, b);