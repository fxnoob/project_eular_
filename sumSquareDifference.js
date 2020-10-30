function sumSquareDifference(n) {
	const memory = {};
	function squaredIntegerSum(n) {
		if (memory[n]) return memory[n];
		if (n == 1) return 1;
		else {
			memory[n] = n*n + squaredIntegerSum(n-1);
			return memory[n];
		}
	}
	function integerSumThenSquare(n) {
		const sum = 0.50 * (n*n + n);
		return sum*sum;	
	}
	return integerSumThenSquare(n) - squaredIntegerSum(n);
}

