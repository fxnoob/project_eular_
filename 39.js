const max = {
	p: 0,
	count: 0,
}
for(let p = 3; p < 1001; p++) {
	let count = 0;
	for (let i = 1; i < p; i++) {
		for(let j = 1; j < p; j++) {
			k =  p - i - j ;
			const nums = [k, i , j];
			const values = nums.sort(function(a, b){return b - a})
			if (k < 1) break;
			if (values[0] * values[0] == (values[1] * values[1] + values[2] * values[2])) {
				count++;
				console.log(values);
			}
		}
	}
	if (max.count < count){
		max.count = count;
		max.p = p;
	}
}
console.log(max);