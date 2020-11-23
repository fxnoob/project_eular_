 // pn = an pn−1 + pn−2, qn = anqn−1 + qn−2,

function A(n) {
	if (n == 0) return 2;
	if (n % 3 == 0) {
		return 2 * ( n / 3 ) 
	} else {
		return 1;
	}
}

let an_2 = BigInt(2), an_1 = BigInt(3), an, count = 2;
for (let i = 3; i <=100; i++) {
	an = BigInt(A(i)) * BigInt(an_1) + BigInt(an_2);
	console.log({an, an_1, an_2 , a0: A(i), i});
	an_2 = an_1;
	an_1 = an;
}
let sum = 0;
const str = an.toString();
for(let i = 0; i < str.length; i++) {
	sum += Number(str[i]);
}

console.log(sum)