const dict = {}
function f(m, n) {
	if (dict[`${m}${n}`]) return dict[`${m}${n}`];
	if (m == 0) return n + 1;
	else if (m > 0 && n == 0) {
		dict[`${m}${n}`] = f(m-1, 1);
		return dict[`${m}${n}`];
	} else if(m > 0 && n > 0) {
		let b;
		if (dict[`${m}${n-1}`]) {
			b = dict[`${m}${n-1}`];
		} else {
			dict[`${m}${n-1}`] = f(m, n-1);
			b = dict[`${m}${n-1}`];
		}
		dict[`${m}${n}`] = f(m-1, b);
		return dict[`${m}${n}`];
	}
}

// function f3n(n) {
// 	if(n == 0) return 5;
// 	else {
// 		return 2 * f3n(n - 1) + 3;
// 	}
// }
function f3n(n) {
	let ini = 5;
	if (n == 0) {
		return ini;
	}
	const mod = Math.pow(14, 8);
	for(let i = 1; i <= n; i++) {
		const an = (2 * ini + 3) % mod;
		ini = an; 
	}
	return ini;
}
 
// let sum = 0;
// const mod = Math.pow(14, 8);

// for(let i = 0; i <=3; i++) {
// 	for(let j = 0; j <=3; j++) {
// 		const value = f(i, j);
// 		console.log(`f(${i}, ${j}) = ${value}`);
// 		sum += value % mod;
// 	}
// }
// console.log(sum);

