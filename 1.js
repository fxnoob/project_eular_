function getSumBelow1000(n, a, l) {
	return (n/2)*(a+l);
}

function getResult() {
	const forFive = getSumBelow1000(199, 5, 995);
	const forThree = getSumBelow1000(333, 3, 999);
	const forFifteen = getSumBelow1000(66, 15, 990);
	return (forFive + forThree - forFifteen);
}