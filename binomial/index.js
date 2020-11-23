const fact = {};
function factorial(n) {
	if(fact[n]) return fact[n];
	if (n == 1 || n == 0) return 1;
	else {
		fact[n] = n * factorial(n-1);
		return fact[n];
	}
}
function ncr(n, r) {
	return factorial(n) / ( factorial(n-r) * factorial(r) );
}

/**

(x + y) ^ n exapansion

*/
function expr(x,y, n) {
	let exr = '';
	for(let i = 0; i <= n; i++) {
		const coeff = ncr(n, i);
		if (exr == '') {
			exr += `${coeff}x^${n}y^${i}`;
		} else {
			exr += `+${coeff}x^${n}y^${i}`;
		}
		
	}
	return exr;
}