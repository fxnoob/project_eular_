const primes = {};
function isPrime(n) {
	let res = true;
	if (primes[n]) return res;
	if (n < 2) return false;
	if (n == 2) return res;
	const upperBound = Math.sqrt(n) + 1;
	let i = 2;
	while(i < upperBound) {
		if (n % i == 0) {
			res = false;
			break;
		}
		i++;
	}
	if (res) primes[n] = true;
	return res;
}
function trunc(str, i, direction = 'left_to_right') {
	let res;
	if (direction == 'left_to_right') {
		res = Number(str.substring(i));
	} else {
		res = Number(str.substring(0, i));
	}
	return res;
}
function trancablePrime(n) {
	let res = true;
	const numStr = n.toString();
	for (let i =0; i < numStr.length; i++) {
		if (numStr[i] == 0) {
			res = false;
			break;
		}
	}
	if (!res) return res;
	for(let i = 0; i < numStr.length; i++) {
		const num = trunc(numStr, i, 'left_to_right');
		if (!isPrime(num)) {
			res = false;
			break;
		}
	}
	if (!res) return res;
	for(let i = 0; i < numStr.length; i++) {
		const num = trunc(numStr, numStr.length - i , 'right_to_left');
		if (!isPrime(num)) {
			res = false;
			break;
		}
	}
	return res;
}
let count = 0;
let sum = 0;
for (let i = 11; count <11; i++) {
	if (trancablePrime(i)) {
		count++;
		sum += i;
		console.log(i);
	}
}
console.log("sum = ", sum);