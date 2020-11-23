function gcd(n, m){
	let a,b
	if (n > m) {
		a = n;
		b = m;
	} else {
		a = m;
		b = n;
	}
	if (b == 0) return a ;
	else if (b == 1) return 1;
	else {
		return gcd(b, a%b);
	}
}