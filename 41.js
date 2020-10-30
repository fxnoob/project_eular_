function isPendigital(n) {
	let res = true;
	const numStr = `${n}`;
	const digits = {1:0, 2:0, 3:0, 4:0, 5:0,6:0,7:0,8:0,9:0};
	for(let i = 0; i < numStr.length; i++) {
		digits[numStr[i]]++;
	}
	for(let i = 1; i < numStr.length + 1; i++) {
		if (!digits[i] == 1){
			res = false;
			break;
		}
	}
	return res;
}
const primes = {};
function isPrime(n){
	if (primes[n]) return true;
	let res = true;
	const upperLimit = Math.sqrt(n) + 1;
	if (n % 2 == 0) return false;
	for (let i = 3; i < upperLimit; i = i+2) {
		if (n % i  == 0) {
			res = false;
			break;
		}
	}
	if (res) primes[n] = true;
	return res;
}
let max = 2143
for(let i = 2143; i < 999999999; i = i+2) {
	if (isPendigital(i) && isPrime(i)) {
		if (max < i) {
			console.log(i)
			max = i;
		}
	}
}
