function calculate(upto) {
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
function reverseString(str) {
    return str.split("").reverse().join("");
}
function rotate(str, step) {
	let arr=[];
	const len = str.length
	for (let i = 0; i < len; i++) {
		arr[ (i+step) % len ] =  str[i];
	}
	return arr.join('');
}
function circularPrime(n) {
	let res = true;
	const numStr = n.toString();
	if (numStr.length == 1 && numStr == 2) return true;
	for (let i =0; i < numStr.length; i++) {
		if (numStr[i] == 0 || numStr[i] == 2) {
			res = false;
			break;
		}
	}
	if (!res) return res;
	for(let i = 0; i < numStr.length; i++) {
		const num = rotate(numStr, i);
		if (!isPrime(num)) {
			res = false;
			break;
		}
	}
	return res;
}
let count = 0;
for (let i = 2; i < upto; i++) {
	if(circularPrime(i)) {
		console.log(i);
		count++;
	}
}

console.log(count);
}
calculate(1000000);//1000000