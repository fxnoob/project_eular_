function isPermuation(n1, n2, n3) {
	const ns1 = Number(n1.toString().split("").sort().join(''));
	const ns2 = Number(n2.toString().split("").sort().join(''));
	const ns3 = Number(n3.toString().split("").sort().join(''));
	return ns1 == ns2 && ns2  == ns3;
 }
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
const upperLimit = 9999;
const primes = [];
const mapping = {};
const prime = primeGenerator(); 
for(let value of prime) {
	if (value < upperLimit) {
		primes.push(value);
		mapping[value] = true;
	} else {
		break;
	}
}
for (let i = 0; i < primes.length -1; i++) {
	for (let j = i+1; j < primes.length; j++) {
		const p = (primes[j] + primes[i]) / 2;
		if (mapping[p]) {
			if (isPermuation(primes[i], p, primes[j])) {
				const str = `${primes[i]}${p}${primes[j]}`;
				console.log(primes[i], p, primes[j]);
				console.log(str);
			}
	}
	}
}