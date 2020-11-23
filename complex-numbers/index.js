const math = require('mathjs');

function rotate(x,y, angle) {
	const a = math.complex(x, y);
	const theta = math.atan(y/x);
	const b = math.complex(math.cos(angle), math.sin(angle));
	const c = math.multiply(a, b);
	return {
		x: c.re,
		y: c.im,
	}
}

function rotate2(x, y, angle) {
	const magnitute = Math.sqrt(x * x + y * y);
	const theta = Math.atan(y/x);
	return {
		x: Math.round(Math.cos(theta + angle) * magnitute),
		y: Math.round(Math.sin(theta + angle) * magnitute),
	}
}
console.log(rotate2(3,4, Math.PI/2))