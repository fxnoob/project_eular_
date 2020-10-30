function distinctPowers() {
	const n = {};
	for (let a = 2; a <= 100; a++) {
		for (let b = 2; b <= 100; b++) {
			n[Math.pow(a, b)] = true;
		}
	}
	return Object.keys(n).length;
}