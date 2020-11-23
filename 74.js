const facts = {
	0: 1,
	1: 1,
	2: 2,
	3: 6,
	4: 24,
	5: 120,
	6: 720,
	7: 5040,
	8: 40320,
	9: 362880,
};
function countTerms(n) {
	let nStr = n.toString();
	const cycle = {[nStr]: true};
	function getSum(str) {
		let sum = 0;
		for(let i = 0;i < str.length; i++) {
			sum += facts[str[i]];
		}
		return sum.toString();
	}
	let letItRun = true;
	let count = 1;
	while(letItRun) {
		const sum = getSum(nStr);
		if(cycle[sum]) {
			break;
		} else {
			nStr = sum;
			cycle[sum] = true;
			count++;
			if (count > 60) break;
		}
	}
	return count == 60;
}
let count = 0;
for(let i = 1; i < 1000000; i++) {
	if (countTerms(i)) {
		count++;
	}
}
console.log(count);