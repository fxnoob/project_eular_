const primes = {}
function isPrime(n) {
	if (n == 2 || n == 3) return true;
	if (n < 2 || n % 2 == 0) return false;
	const upperLimit = Math.sqrt(n) + 1;
	let res = true;
	for(let i = 3; i < upperLimit; i = i+2) {
		if (n % i == 0) {
			res = false;
			break;
		}
	}
	if(res) primes[n] = true;
	return res;
}
function spiralLastValue(n) {
	return (4 * n * n - 4 * n + 1);
}
const diagP = {};
const totalP = {};
function checkConditions(i) {
	const d1 = 4 * i * i - 6 * i + 3;
	const d2 = 4 * i * i - 10 * i + 7;
	const d3 = 4 * i * i - 4 * i + 1;
	const d4 = 4 * i * i - 8 * i + 5;
	if (isPrime(d1)) {
		diagP[d1] = true;
	}
	if (isPrime(d2)) {
		diagP[d2] = true;
	}
	if (isPrime(d3)) {
		diagP[d3] = true;
	}
	if (isPrime(d4)) {
		diagP[d4] = true;
	}
	const diagPrimen = Object.keys(diagP).length;
	const n = 2 * Math.sqrt(spiralLastValue(i)) - 1;
	return (diagPrimen * 100) / n;
}
let i = 2;
let notFulfilled = true;
while(notFulfilled) {
	const ratio = checkConditions(i);
	console.log({ratio, i, length: Math.sqrt(spiralLastValue(i))});
	if( ratio < 10) {
		console.log(i,spiralLastValue(i), Math.sqrt(spiralLastValue(i)));
		break;
	}
	i++;
}