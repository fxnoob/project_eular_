function isPentagonal(p) {
	const num =  (1 + Math.sqrt(24 * p  + 1)) / 6
	return Number.isInteger(num);
}
function isHexagonal(p) {
	const num =  (1 + Math.sqrt(8 * p  + 1)) / 4;
	return Number.isInteger(num);
}
function T(n) {
	return n * (n + 1)  / 2
}
let notFound = true;
let i = 286;
while(true) {
	const value = T(i);
	if (isPentagonal(value) && isHexagonal(value)) {
		console.log(value);
		break;
	}
	i++;
}