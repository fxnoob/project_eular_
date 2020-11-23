function countInterval(n) {
	let sqrt = Math.sqrt(n);
	if (Number.isInteger(sqrt)) return 0;
	const map = {};
	let a0='', r0;
	const ini  = Math.floor(sqrt);
	let count = 0;
	while(true) {
		if (ini == a0){
			break
		} else{
			count++
		}
		a0  = Math.floor(sqrt);
		r0 = 1/(sqrt - a0);
		sqrt = r0;
	}
	console.log(n, count)
	return count;
}

let count = 0;
for(let i = 2; i <= 13; i++) {
	if (countInterval(i) % 2 != 0) {
		count++;
	}
}
console.log(count);