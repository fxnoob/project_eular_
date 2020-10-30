let sum = 0;
function reverseString(str) {
    return str.split("").reverse().join("");
}
for (let i = 0 ; i < 1000000; i++) {
	const numStr = i.toString();
	if (numStr == reverseString(numStr)) {
		const bin = i.toString(2);
		if (bin == reverseString(bin)) {
			sum += i;
		}
	}
}
console.log(sum)