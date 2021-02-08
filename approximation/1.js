// Approximate 1/n^2 to two decimal places.

function sum(upto) {
	let s = 0;
	for(let i = 1; i <= upto; i++) {
		s += 1 / ( i * i );
	}
	return s;
}
// f(x) = x^2 - n [newtons method]
function sqrt(n) {
	let x = n / 2;
	for (let i = 0; i < 1000; i++) {
		x = x - (1/2) * (x - n/x);
	}
	return x;
}


console.log(sum(100))
