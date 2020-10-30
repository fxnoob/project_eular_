const DIV = {};
function getNumberOfDivisors(n) {
	if (n == 1) return 1;
	if (DIV[n]) return DIV[n];
	const upperBound = Math.sqrt(n) +1;
	let nod = 0;
	for (let i = 1; i < upperBound; i++) {
		if (n % i == 0) {
			nod += 2;			
		}
	}
	if (upperBound * upperBound == n) {
		nod--;
	}
	DIV[n] = nod;
	return DIV[n];
}

function getNumberOver500Divisors() {
	/***
	 nth triangle is given by n*(n+1)/2 so check number of divisors for n and n+1
	**/
	let res = null;
	let n = 1;
	console.time('getNumberOver500Divisors');
	while(true) {
		const t = (n*(n+1))/2;
		const nod = getNumberOfDivisors(t);
		console.log(t, nod);	
		if (nod > 500) {
			console.log("end", t, nod);
			break;
		}	
		n++;
	}
}
getNumberOver500Divisors();
