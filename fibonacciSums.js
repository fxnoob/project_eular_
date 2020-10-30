const FIB = {};
function getFib(n) {
	if (FIB[n]) return FIB[n];
	if (n == 1 || n == 0) return 1;
	else {
		FIB[n] = getFib(n-1) + getFib(n-2);
		return FIB[n]; 
	}
}

function getSum() {
	const upperBound = 4000000;
	let sum = 0;
	let i = 2;
	while (true) {
		const ithFib = getFib(i++); 
		if (ithFib < upperBound) {
			if (ithFib % 2 == 0) {
				sum += ithFib;
			}
		} else {
			break;
		}
		
	}
	return sum;
}