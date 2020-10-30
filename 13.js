let MEMORY={};
function sequence(n) {
	if (MEMORY[n]) return MEMORY[n];	
	if (n == 1) return 1;
	if (n % 2 == 0) {
		MEMORY[n] = sequence(n/2);
		return MEMORY[n];
	} else {
		MEMORY[n] = sequence(3*n + 1);
		return MEMORY[n];
	}
}
let i = 1;
let maxChain = {
	n: 1,
	length: 1,
};
console.time('time taken');
while(i < 1000000) {
	MEMORY={};
	sequence(i);
	const length = Object.keys(MEMORY).length + 1;
	if (length > maxChain.length) {
		maxChain.length = length;
		maxChain.n = i;
	}
	//console.log({i, length, MaxLen:maxChain.length});
	i++;
}

console.timeEnd('time taken');
console.log({maxChain});