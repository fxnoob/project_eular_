function palindromePossible(n) {
	let res = false;
	let str1 = n.toString();
	let factor = 1;
	let num = 0;
	for(let i = 1; i < 55; i++) {
		if (i > 0) {
				factor = 2 * i;
		}
		let sum = 0;
		for(let j = 0 ; j < str1.length; j++) {
			sum += Math.pow(10, str1.length -1 - j) * (Number(str1[j]) + Number(str1[str1.length -1 - j]));
		}
		console.log(sum)
		const newStr = `${sum}`;
		const reverse = newStr.split('').reverse().join('');
		if (newStr == reverse) {
			res = true;
			break;
		}
		str1 = newStr;
	}
	return res;
}
let count = 0;
for (let i = 1; i < 10000; i++) {
	if (!palindromePossible(i)){
		count++;
	}
}
console.log(count)