//Champernowne's constant
function Digits(upto, n , divisor) {
	let count = 0;
	const digits = [];
	while(count < upto) {
		if (n > divisor) {
			const ni = BigInt((n - n % divisor) / divisor);
			digits.push(ni);
			console.log(ni)
			n = n - divisor * ni;
			count++;
		} else {
			// console.log(n)
			digits.push(0);
			n = n * BigInt(10);
		}
		console.log(n, divisor)
	}
	return digits;
}

// let n = BigInt('123456789101112131415161718192021');
// const div =	BigInt('100000000000000000000000000000000');
// console.log(Digits(1000000, n , div));
// console.log(Digits(30, BigInt(3003) , BigInt(1000)));
function f(n) {
    const res =  Math.floor((n-10)/ 2) + 10;
    if (n % 2 == 0) {
    	return Math.floor(res / 10);
    } else {
    	return res % 10;
    }
}
function n(num) {
	if ( num == 1) return 9;
	else {
		return 9 * Math.pow(10, num - 1) * num + n(num - 1);
	}
}

let str = ''
for(let i = 1; i < 1000000; i++) {
	str += `${i}`;
}
const res = Number(str[0]) * Number(str[10 -1]) * Number(str[100 -1])* Number(str[1000 -1])* Number(str[10000 -1 ])*Number(str[100000-1]) * Number(str[1000000-1])

