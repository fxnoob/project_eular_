function powDigitSum(m, n) {
	let mul = BigInt(1);
	for(let i = 1; i <= n; i++) {
		mul  = mul * m; 
	}
	let sum = 0;
	mul.toString().split('').map(n => {
		sum += Number(n);
	})
	return sum;
}
let max = 0;
for(let i = 1; i < 100; i++) {
	for(let j = 1; j < 100; j++) {
		const sum = powDigitSum(BigInt(i), BigInt(j));
		if (sum > max) {
			max = sum;
		}
	}
}
console.log(max)