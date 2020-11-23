function *primeGenerator() {
	yield 2;
	yield 3;
	yield 5;
	yield 7;
	yield 11;
	yield 13;
	for (let i = 17; true; i = i + 2) {
		const upperBound = Math.sqrt(i) + 1;
		let prime = true;
		if (i % 2 == 0) continue;
		for(let j = 3; j < upperBound ; j = j+2) {
			if (i % j == 0) {
				prime = false;
				break;
			}
		}
		if (prime) yield i;
	}
}
checkPermutation(num, primes) {
	
}
const prime = primeGenerator(); 
const primes = {}
const arr = []
for(let value of prime) {
	if (value > 1000000) break;
	arr.push(value);
	primes[value] = true;
}
for(let i = 0;i < arr.length; i++) {
	checkPermutation(arr[i], primes);
}