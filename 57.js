//numerator
const numerator_dict = {};
const denominator_dict = {};
function N(n) {
	if(numerator_dict[n]) return numerator_dict[n];
	if (n < 1) return BigInt(1);
	if (n == 1) return BigInt(3);
	numerator_dict[n] = BigInt(2) * N(n-BigInt(1)) + N(n-BigInt(2));
	return numerator_dict[n];
}
function D(n) {
	if(denominator_dict[n]) return denominator_dict[n];
	if (n < 1) return BigInt(1);;
	if (n == 1) return BigInt(2);;
	denominator_dict[n] =  BigInt(2) * D(n-BigInt(1)) + D(n-BigInt(2));
	return denominator_dict[n];
}
function checkDigits(n) {
	const numerator = N(n).toString();
 	const denominator = D(n).toString();
 	console.log({n, numerator, denominator});
 	return numerator.length > denominator.length; 
}

let count = 0;
for(let i = 1; i <= 1000; i++) {
	if(checkDigits(BigInt(i))) {
		count++;
	}
}
console.log(count);

// by solving recurrence relation for numerator f(n) = 2 * f(n-1) + f(n-2).
function NN(n) {
	const a = (1 + Math.sqrt(2)) / 2;
	const b = (1 - Math.sqrt(2)) / 2;
	return Math.ceil(a * Math.pow(1+Math.sqrt(2), n) + b * Math.pow(1-Math.sqrt(2), n));
}