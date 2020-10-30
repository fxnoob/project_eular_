function *primeGenerator() {
	yield 2;
	yield 3;
	yield 5;
	yield 7;
	yield 11;
	yield 13;
	for (let i = 17; true; i = i + 2) {
		const upperBound = Math.sqrt(i) + 1;
		let prime = true;
		if (i % 2 == 0) continue;
		for(let j = 3; j < upperBound ; j = j+2) {
			if (i % j == 0) {
				prime = false;
				break;
			}
		}
		if (prime) yield i;
	}
}
function p(arr, i, res) {
	if (arr.length < i) return res;
	else {
		for(let i = 0; i < arr.length; i++) {
			p(arr,i+1,res);
			res.push(arr[i]);
		}
	}
}