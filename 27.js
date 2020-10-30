const primes = [2, ,3 ,5, 7, 11, 13 ,17];
function isPrime(n) {
	if (n < 2) return false;
	const upperLimit  = Math.sqrt(n) + 1;
	let res = true;
	for (let i = 2; i < upperLimit; i++) {
		if (n % i == 0) {
			res=  false;
			break;
		}
	}
	return res;
}
function chainLength(a, b) {
	let len = 0;
	for (let i = 0; i <= 79; i++) {
		if (isPrime(i*i + a*i + b)) {
			len++
		} else {
			break;
		}
	}
	return len;
}
const max = {
	len: 0,
	a: 0,
	b: 0,
};
for(let i = -1000; i <= 1000; i++) {
	for (let j = -1000; j <= 1000; j++) {
		const len = chainLength(i, j);
		console.log(i, j, len);
		if (len ==79) {
			console.log("ans: " , i, j, len);
		}
		if (max.len < len) {
			max.len = len;
			max.a = i;
			max.b = j;
		}
	}
}
console.log({max});