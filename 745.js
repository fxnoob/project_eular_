
function getMaxPerfectSquare(input, modBy) {
	const n = parseInt(input % BigInt(modBy));
	const upperLimit = parseInt(Math.sqrt(n));
	let div = 1;
	for (let i = upperLimit; i >= 2; i--) {
		const m = i*i;
		if (n % m == 0) {
			div = m;
			break;
		}
	}
	return  div;
}
function sol() {
	const modBy = 1000000007;
	const limit = BigInt(100000000000000)//100000000000000;
	let sum = 0;
	for (let i = BigInt(1); i <= limit; i++) {
		sum +=  (getMaxPerfectSquare(i, modBy) % modBy);
		//console.log(sum);
	}
	sum = sum % modBy;
	return sum;
}
console.log(sol());
