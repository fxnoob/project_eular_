function sum() {
	const dups = {};
	function duplicateDigit(str) {
		let res = false
		const digits = {
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
		};
		for (let i = 0; i < str.length; i++) {
			if (str[i] == '0') {
				res = true;
				break;
			}
			digits[str[i]]++;
		}
		if (res) return res;

	 	Object.keys(digits).map(k => {
	 		if (digits[k] > 1){
	 			res = true;
	 		}
		})
		return res;	
	}
	function isPenDigital(str) {
		let res = true
		const digits = {
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
		};
		for (let i = 0; i < str.length; i++) {
			if (str[i] == '0') {
				res = false ;
				break;
			}
			digits[str[i]]++;
		}
		if (!res) return 3;
	 	Object.keys(digits).map(k => {
	 		if (digits[k] != 1){
	 			res = false;
	 		}
		})
		return res;
	}
	let s = 0;
	for (let i = 1; i < 123456789; i++) {
		console.log(i)
		if (duplicateDigit(`${i}`)) continue;
		for (let j = 1; j < 123456789; j++) {
			const mul = i*j;
			const str = `${i}${j}${mul}`;
			if (str.length != 9 || duplicateDigit(str)) continue;
			if (!dups[str] && isPenDigital(str)) {
				s += i*j;
				console.log(`${i}x${j} = ${mul}`)
				dups[str]= true;
			}
			console.log(i, j, mul);
		}
	}
	return s;
}
function combo(input) {
	var permArr = [],
  	usedChars = [];
	function permute(input) {
	  var i, ch;
	  for (i = 0; i < input.length; i++) {
	    ch = input.splice(i, 1)[0];
	    usedChars.push(ch);
	    if (input.length == 0) {	
	      permArr.push(Number(usedChars.slice().join('')));
	    }
	    permute(input);
	    input.splice(i, 0, ch);
	    usedChars.pop();
	  }
	  return permArr
	};
	return permute(input);
}

function isPenDigital(str) {
		let res = true
		const digits = {
			'1': 0,
			'2': 0,
			'3': 0,
			'4': 0,
			'5': 0,
			'6': 0,
			'7': 0,
			'8': 0,
			'9': 0,
		};
		for (let i = 0; i < str.length; i++) {
			if (str[i] == '0') {
				res = false ;
				break;
			}
			digits[str[i]]++;
		}
		if (!res) return res;
	 	Object.keys(digits).map(k => {
	 		if (digits[k] != 1){
	 			res = false;
	 		}
		})
		return res;
	}
function split(value, index)
{
 return [value.substring(0, index) , value.substring(index)];
}
function compute() {
	const dup = {};
	let sum  = 0;
	 const numStr = "123456789";
	 for (let i = 1; i < numStr.length; i++) {
	 	const str = split(numStr, i);
	 	console.log(str);
	 	const combo1 = combo(str[0].split(""))
	 	const combo2 = combo(str[1].split(""))
	 	//console.log(combo1, combo2);
	 	for (let a of combo1) {
	 		for (let b of combo2) {
	 			const mul = a*b;
	 			const s = `${a}${b}${mul}`;
	 			//console.log(s);
	 			if (s == '391867254') {
	 				console.log("dfdffdfdffdf");
	 				break;
	 			}
	 			if (!dup[s] && isPenDigital(s)) {
	 				sum += mul;
	 				dup[s] = true;
	 			}
	 		}
	 	}
	 }
	 return sum;
}
console.log(sum());