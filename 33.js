function frac() {
	let deno = 1;
	for (let i =11; i < 100; i++) {
		for (let j = 11; j < 100; j++) {
			const iStr = i.toString();
			const jStr = j.toString();
			const expr = (i*Number(jStr[1]) - j*Number(iStr[0]) == 0)
			if (jStr[0] == iStr[1] && expr && i/j < 1) {
				deno *= Number(jStr[0]);	
				console.log(`${iStr}/${jStr}`);
			} 
		}
	}
	return deno;
}
console.log("deno",frac())