function sum() {
	function powerSum(n, power) {
		let sum = 0;
		while( n > 0 ) {
			const digit = n % 10;
			sum += Math.pow(digit, power);
			n = n - digit;
			n = Math.round(n/10);
		}
		return sum;
	}
	let sum = 0;
	for ( let i = 64; i <= 295245; i++ ) {
		
		if (powerSum(i, 5) == i) {
			sum += i;
			console.log(i);
		}
	}
	return sum;
}
console.log(sum())
