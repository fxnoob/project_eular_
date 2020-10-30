const literals = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	10: 'ten',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90:  'ninety',
	100: 'one hundred',
	200: 'two hundred',
	300: 'three hundred',
	400: 'four hundred',
	500: 'five hundred',
	600: 'six hundred',
	700: 'seven hundred',
	800: 'eight hundred',
	900: 'nine hundred',
	1000: 'one thousand',

}

function process2Digit(n) {
	if (n == 0) return;
	if (literals[n]) return literals[n];
	else {
		const d2 = n % 10;
		if (n > 20 && n <30) {
			return `${literals[20]}${literals[d2]}`
		} if (n > 30 && n < 40) {
			return `${literals[30]}${literals[d2]}`
		} if (n > 40 && n < 50) {
			return `${literals[40]}${literals[d2]}`
		} if (n > 50 && n < 60) {
			return `${literals[50]}${literals[d2]}`
		} if (n > 60 && n < 70) {
			return `${literals[60]}${literals[d2]}`
		} if (n > 70 && n < 80) {
			return `${literals[70]}${literals[d2]}`
		} if (n > 80 && n < 90) {
			return `${literals[80]}${literals[d2]}`
		} if (n > 90 && n < 100) {
			return `${literals[90]}${literals[d2]}`
		}
	}
}
function process1Digit(n) {
	if (n == 0) return;
	if (literals[n]) return literals[n];
}
function process3Digit(n) {
	if (n < 100) return;
	const d3 = n % 10;
	n = Math.floor(n / 10);
	const d2 = n % 10;
	n = Math.floor(n / 10);
	const d1 = n;
	console.log({d1, d2, d3})
	let str = literals[d1 * 100];
	if (d2 * 10 + d3) {
		str += ` and ${process2Digit(d2 * 10 + d3)}`;
	}
	console.log({str});
	return str ? str: '';
}

function run(upto) {
	let count = 0;
	for (let i = 1; i <= upto; i++) {
		const numStrLength =  i >= 100 ? process3Digit(i).replace(/ /g, "").length : process2Digit(i).replace(/ /g, "").length;
		count += numStrLength;
	}
	return count;
}