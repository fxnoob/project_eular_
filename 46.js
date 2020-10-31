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
function canExpress(n, primes) {
	let i = 0;
	while(primes.length > i && primes[i] < n) {
		for (let j = 1; j <= n; j++) {
			const expr = primes[i] + 2 * j * j;
			//console.log(`${primes[i]} + 2 * ${j} * ${j}`, expr, n)
			if (expr == n) {
				return true;
			}
		}
	 	i++;
	}
	return false;
}
const primes = [];
const mapping = {}
const prime = primeGenerator();
for(let value of prime) {
	if (value > 10000){
		break;
	}
	mapping[value] = true;
	primes.push(value);
}
let n = 31;
let notFound = true;

while(notFound) {
	if(!mapping[n] && !canExpress(n, primes)) {
		console.log(n);
		notFound = false;
	}
	n = n+2;
}