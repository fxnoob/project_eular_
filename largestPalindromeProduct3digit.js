function isPalindrome(num) {
	let palindrome = true;
	const str = num.toString();
	const len = str.length;
	for (let i = 0; i < len; i++) {
		let k = len - i - 1;
		if (str[i] != str[k]) {
			palindrome = false;
			break;
		}
	}
	return palindrome;
}
function largestPalindromeProduct3digit() {
	let res = [];
	for (var i = 999; i > 100; i--) {
		for (var j = 999; j > 100; j--) {
			const num = j * i;
			if(isPalindrome(num)) {
				res.push(num);
			}
		}
	}
	console.log(res);
	return Math.max(...res);
}