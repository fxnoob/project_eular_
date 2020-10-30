function turn(cord, arr) {
	const newCord = {
		r: cord.r,
		c: cord.c,
		direction: cord.direction,
	};
	let direction;
	if (cord.direction == 'N') {
		if(!arr[newCord.r][newCord.c + 1]) {
			newCord.c++;
			newCord.direction = 'E';		
		} else {
			newCord.r--;
		}
	} else if (cord.direction == 'E') {
		if(!arr[newCord.r+1][newCord.c]) {
			newCord.r++;
			newCord.direction = 'S';		
		} else {
			newCord.c++;
		}
	} else if (cord.direction == 'S') {
		if(!arr[newCord.r][newCord.c -1]) {
			newCord.c--;
			newCord.direction = 'W';
		} else {
			newCord.r++;
		}
	} else if (cord.direction == 'W') {
		if (!arr[newCord.r - 1][newCord.c]) {
			newCord.r--;
			newCord.direction = 'N';
		} else {
			newCord.c--;
		}
	}
	return newCord;
}
function mat(n) {
	const matrix = [];
	for (let i = 0; i < n; i++) {
		 matrix[i] = new Array(n);
	}
	let cord = {
		r: (n-1)/2,
		c: (n-1)/2,
		direction: 'N',
	}
	matrix[cord.r][cord.c] = 1;
	let sum = 0;
	for (let i = 2; i < n * n + 1; i++) {
		cord = turn(cord, matrix);
		if ((cord.r == cord.c) || (cord.r + cord.c == n-1))  {
			console.log({i, cord})
			sum += i;
		}
		matrix[cord.r][cord.c] = i;
	}
	console.log(sum+1);
	return matrix;
}
const mt = mat(1001);
console.log(mt)