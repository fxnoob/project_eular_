// Approximate 1/n^2 to two decimal places.

function sum(upto) {
	let s = 0;
	for(let i = 1; i <= upto; i++) {
		s += 1 / ( i * i );  
	}
	return s;
}

console.log(sum(100))