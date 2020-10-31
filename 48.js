function power(n, p) {
	let mul = 1;
	for (let i = 1; i <= p; i++) {
		mul = (mul*n) % 100000000000 ;
	}
	return mul;
}

let digits = 0;
for(let i = 1; i <= 1000; i++) {
	const p = power(i, i);
	digits += p % 100000000000;
}
console.log(digits);