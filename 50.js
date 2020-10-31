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
let c = 0;
let max = {
	n: 0,
	count: 0,
};
const upperLimit =  1000000// 1000000
for(let value of prime) {
  if (value < upperLimit) {
  	primes.push(value);
  	for(let i = 0; i < c; i++) {
  		let sum = 0;
  		for(let j = i; j < c; j++) {
  			sum += primes[j];
  			if (value == sum) {
  				if (max.count < j - i + 1) {
  					max.count =  j -i + 1;
  					max.n = value;
  				}
  			}
  			if (sum > value) break;
  		}
  	}
  	c++;
  } else {
  	break;
  }
}
console.log(max);