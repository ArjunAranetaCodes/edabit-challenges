function smallest(n) {
   	return lcm(BigInt(n)) 
}

function gcd(a, b) 
{ 
	 a = BigInt(a)
	 b = BigInt(b)
   if(a%b != 0)  
      return gcd(b,a%b); 
   else 
      return b; 
} 
  
function lcm(n) 
{ 
    var ans = BigInt(1);     
    for (var i = 1; i <= n; i++) 
        ans = (BigInt(ans) * BigInt(i))/(gcd(BigInt(ans), BigInt(i))); 
    return ans; 
}