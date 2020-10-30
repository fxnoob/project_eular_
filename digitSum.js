function f(n) {
	if (n == 1n || n == 0n) return BigInt(1);
	else {
		return BigInt(n) * f(n-1);
	}
}
const str = f(100).toString();
let sum = 0;
for (let i = 0 ; i < str.length; i++) {
	sum += Number(str[i]);
}

// 
function digitSum(n) {
	function convert(n) {
		const arr = [];
		const str = n.toString();
		for (let i = str.length -1; i >= 0; i--) {
			arr.push(Number(str[i]));
		}
		return arr;
	}
	function mul(arr1, arr2) {
		const arr3 = [];
		let carry = 0;
		for(let i = 0; i < 2 * Math.max(arr1.length, arr2.length); i++) {
			let ithMul;
			if (arr1[i] != undefined && arr2[i] != undefined) {
				ithMul = arr1[i] * arr2[i] + carry;
			} else if (arr1[i] != undefined) {
				ithMul = arr1[i] + carry;;
			} else if (arr2[i] != undefined) {
				ithMul = arr2[i] + carry;;
			} else {
				ithMul = carry;;
			}
			arr3.push(ithMul % 10);
			carry = ithMul > 10 ? Math.round(ithMul / 10) : 0;
		}
		return arr3;
	}
	function multiply(n, n2) {
		const c1 = convert(n1);
		let total = convert(n2);
		for (let i = 0; i < n2; i++) {
			total = sum(total, total);
		}
		return total;
	}
	let factorial = [1];
	for (let i = 2; i <= n; i++) {
		factorial = multiply(convert(i), factorial);
	}
	let sum = 0;
	factorial.map(n => {
		sum += n;
	});
	return sum;
}