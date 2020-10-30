function isPrime(num, previousPrimes) {
	const limit = Math.sqrt(num)+1;
	let i = 0;
	let itsPrime = true;
	while(previousPrimes[i] < limit) {
		if (num % previousPrimes[i] == 0) {
			itsPrime = false;
			break;
		}
		i++;
	}
	return itsPrime;
}
function tenThousand1stPrime(){
	const primes = [ 2, 3, 5, 7, 11, 13];
	let primeCount = 6;
	let num = 17;
	let res;
	while(primeCount < 10002) {
		if(isPrime(num, primes)) {
			primeCount++;
			if (primeCount == 10001) {
				res = num;
			}
			primes.push(num);	
		}
		num = num+2;
	} 
	return res;
}
//run
tenThousand1stPrime();