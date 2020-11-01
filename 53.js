function f(n) {
	if (n == BigInt(1) || n == BigInt(0)) return BigInt(1);
	else {
		return n * f(n - BigInt(1));
	}
}

function ncr(n, r) {
	return f(n) / (f(n - r) * f(r));
}
let count = 0;
for(let i = 1; i < 101; i++) {
	for(let j = i; j > -1; j--) {
		const val = ncr(BigInt(i), BigInt(j))
		console.log(val, i , j)
		if (val > BigInt(1000000)) {
			count++;
		}
	}
}
console.log(count)
