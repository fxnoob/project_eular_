function sumoFDivisors(n) {
	let sum = 0;
	for (let i = 1; i < n ; i++) {
		if (n % i == 0) {
			sum += i;
		}
	}
	return sum;
}

const nums = {}

for (let i = 1; i < 10000; i++) {
	const d1 = sumoFDivisors(i);
	const d2 = sumoFDivisors(d1);
	if (i == d2 && d1 != i) {
		console.log({i, d1, d2})
		nums[i] = true;
		nums[d1] = true;
	}
}
let sum = 0;
Object.keys(nums).map(n => {
	sum += Number(n);
})