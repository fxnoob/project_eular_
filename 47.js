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
const prime = primeGenerator(); 
const primes = [];
const mapping= {};
for(let value of prime) {
	if (value > 10000000) {
		break;
	}
	mapping[value] = true;
	primes.push(value);
}
function distinctPFactors(n,a,b,c,d, primes) {
	if (mapping[a] || mapping[b] || mapping[c] || mapping[c]) return false;
	const factorsa = [];
	const factorsb = [];
	const factorsc = [];
	const factorsd = [];
	let i = 0;
 	while(primes[i] < Math.sqrt(a) + 1) {
 		if (a % primes[i] == 0) {
 			factorsa.push(primes[i]);
 			while(a % primes[i] == 0) {
	 			a = a / primes[i];
	 		}
 		}
 		if (a == 1) break;
 		i++
	}
	i = 0;
	while(primes[i] < Math.sqrt(b) + 1) {
 		if (b % primes[i] == 0) {
 			factorsb.push(primes[i]);
 			while(b % primes[i] == 0) {
	 			b = b / primes[i];
	 		}
 		}
 		if (b == 1) break;
 		i++
	}
	i = 0;
	while(primes[i] < Math.sqrt(c) + 1) {
 		if (c % primes[i] == 0) {
 			factorsc.push(primes[i]);
 			while(c % primes[i] == 0) {
	 			c = c / primes[i];
	 		}
 		}
 		if (c == 1) break;
 		i++
	}
	i = 0;
	while(primes[i] < Math.sqrt(d) + 1) {
 		if (d % primes[i] == 0) {
 			factorsd.push(primes[i]);
 			while(d % primes[i] == 0) {
	 			d = d / primes[i];
	 		}
 		}
 		if (d == 1) break;
 		i++
	}
	console.log(factorsd.length, factorsc.length, factorsb.length, factorsa.length);
	//return factorsd.length == factorsc.length && factorsc.length == factorsb.length && factorsb.length == factorsa.length;
	return factorsa.length == n && factorsb.length == n && factorsc.length == n && factorsd.length == n;
}
for(let i = 1000; i < 100000000; i++) {
	console.log(i)
	if (distinctPFactors(4,i, i+1, i+2, i+3, primes)){
		console.log(i);
		break;
	}
}