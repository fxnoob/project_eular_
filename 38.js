function penDigital(numStr) {
	let res = true;
	if (numStr.length != 9) return false;
	const digits = {
		1: 0, 
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
	}
	for(let i = 0; i < numStr.length; i++) {
		if (numStr[i] == '0') {
			res = false;
			break;
		}
		digits[numStr[i]]++;
	}
	if (!res) return res;
	for (let i = 0; i < 10; i++) {
		if (digits[i] == 0) {
			res = false;
			break;
		}
	}
	return res;

}
for (let i = 100; i < 99999; i++) {
	const res = penDigital(i);
	if (res.penDigital) {
		if (max < res.num) {
			max = res.num;
		}
	}
}
console.log(sum)