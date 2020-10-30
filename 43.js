function isPrime(n) {
	const upperLimit = Math.sqrt(n) + 1;
	let res = true;
	if (n % 2 == 0) return false;
	else {
		for (let i = 3; i < upperLimit; i = i+2) {
			if (n % i == 0) {
				res = false;
				break;
			}
		}
	}
	return res;
}
function pendigital(numStr) {
	let res = true;
	for (let i = 1; i < 8; i++){
		const t1 = i;
		const t2 = i+1;
		const t3 = i+2;
		const num = 100 * Number(numStr[t1]) + 10 * Number(numStr[t2]) + Number(numStr[t3]);
	    if(num > 1 && isPrime(num)) {
			res = false;
			break;	
		} 
	}
	return res;
}
function permut(string) {
  if (string.length < 2) return string; 

  var permutations = []; 
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    if (string.indexOf(char) != i) 
      continue; 

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString))
      permutations.push(char + subPermutation)
  }
  return permutations;
}

const arr = permut("1234567890");
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] != '0' && pendigital(arr[i])) {
		sum += Number(arr[i]);
		console.log(arr[i], sum)
	}
}
console.log(sum);