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
const dups = {};
let sum = 0;
for (let i = 1; i < 100; i++) {
	const Js = i > 9 ? 123 : 1234;
	const Je = Math.pow(10, 5);
	for (let j = Js; j < Je; j++) {
		const mul = i * j;
		const numStr = `${i}${j}${mul}`;
		if(penDigital(numStr) && !dups[mul]){
			sum += mul;
			dups[mul] = true;
		}
	}
}
console.log(sum)