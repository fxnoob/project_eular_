function getLargestPrimeFactor(n) {
	const primes = [2, 3, 5, 7];
	const factors = [];

	function isPrime(n) {
		const upperBound = Math.sqrt(n) + 1;
		let i = 0;
		let prime = true;
		if (n == 2) return prime;
		while(primes[i] < upperBound) {
			if (n % primes[i] == 0) {
				prime = false;
				break;
			}
			i++;
		}
		if(prime) primes.push(n);
		return prime;
	}
	let i = 2;
	while (n != 1) {
		if (isPrime(i)) {
			if (n % i == 0) factors.push(i);
			while(n % i == 0) {
				n = n/i;
			}
		}
		i++;
	}
	return Math.max(...factors);
}