function isSimilar(...arr) {
	let res = true;
	for(let i = 0; i < arr.length -1; i++) {
		const n1 = Number(arr[i].toString().split('').sort().join(''));
		const n2 = Number(arr[i + 1].toString().split('').sort().join(''));
		if (n1 != n2) {
			res = false;
			break;
		}
	}
	return res;
}
let notFound = true;
let i = 1;
while(notFound) {
	if(isSimilar(i, 2*i, 3*i, 4*i, 5*i, 6*i)) {
		console.log(i);
		notFound = false;

	}
	i++;
}