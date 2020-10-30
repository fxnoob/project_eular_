const fact = {};
function f(n) {
	if (fact[n]) return fact[n];
	if (n ==1 || n ==0) return 1;
	else {
		fact[n] = n * f(n-1);
		return fact[n];
	}
}
function eq(n) {
	let num = n;
	let sum = 0;
	while(num != 0) {
		const digit = num % 10;
		sum += f(digit);
		num = num - digit;
		num = Math.round(num / 10);
	}
	// console.log({n, sum})
	return n == sum; 
}
let sum = 0;
for (let i = 11; i <= f(10); i++) {
	if (eq(i)) {
		console.log("found one ", i)
		sum += i;
	}
}
console.log({sum});