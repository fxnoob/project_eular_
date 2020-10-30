function divSum(n) {
	let sum = 0;
	const divs = [];
	for (let i = 1; i < n; i++) {
		if (n % i == 0) {
			divs.push(i)
			sum += i;
		}
	}
	//console.log(divs)
	return sum;
}
function checkNumber(n) {
	const sum = divSum(n);
	if (n == sum) {
		return 'perfect';
	} else if (sum > n) {
		return 'abundant';
	} else {
		return 'deficient';
	}
}
function canWriteIn2AbdNums(n, abdList) {
	let pair = {res: false, n};
	for (let i = 0; i < abdList.length; i++) {
		for (let j = 0; j < abdList.length; j++) {
			if (abdList[i] + abdList[j] == n) {
				pair = {n, a: abdList[i], b: abdList[j], res: true}
				break;
			}
		}
		if (pair.res) {
			break;
		}
	}
	return pair;
}
function nonAbundantNumbersSum() {
	const nums = [];
	let sum = 0;
	for (let i = 0; i <=28123; i++) {
		if (checkNumber(i) == 'abundant') {
			nums.push(i);
		}
		const pair = canWriteIn2AbdNums(i, nums);
		if (!pair.res) {
			sum += pair.n;
		}

	}
	return sum;
}
function sum() {
	const list = nonAbundantNumbersSum();
}