function sqrt(n) {
	let x0;
	const numStr = n.toString();
	if (numStr.length % 2 == 0) {
		x0 = 7 * Math.pow(10, (numStr.length -2) / 2);
	} else {
		x0 = 2 * Math.pow(10, (numStr.length -1) / 2);
	}
	console.log(x0)
	let i = 1;
	let notFound = true;
	while(notFound) {
		const xk = Math.floor((x0 + Math.ceil(n / x0)) / 2 );
		if (x0 == xk) {
			notFound = false;
			break;
		} else {
			x0 = xk;
		}
		i++;
	}
	if ( i == 3)
	console.log(n,Math.sqrt(n), i)
	return i ;
}
let sum = 0;
const uLimit = Math.pow(10,5)
for (let i = Math.pow(10,4); i < uLimit; i++) {
	sum += sqrt(i);
}
console.log(sum);