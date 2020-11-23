function createHash(str) {
	return str.split('').sort().join('');
}

const cubes = {};
for(let i = 2; true; i++) {
	const cube = i * i * i;
	const hash = createHash(cube.toString());
	if (cubes[hash]) {
		if (cubes[hash].length > 4) {
			console.log(cubes[hash]);
			console.log(Math.min(...cubes[hash]));
			break;
		}
	} else {
		cubes[hash] = [];
	}
	cubes[hash].push(cube);
}
let min = 54354354535345;
Object.keys(cubes).map(k => {
	if(cubes[k].length == 5) {
		const mini = Math.min(...cubes[k]);
		if (mini < min) {
			min = mini;
		}
	}
})
console.log({min})
