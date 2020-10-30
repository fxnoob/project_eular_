function permute(n) {
	if (n ==1 || n ==0 ) return 1;
	else {
		return n* permute(n-1);
	}
}
function f(n) {
	if (n > 0) {
		return n * f(n-1);
	} else {
		return 1;
	}
}
function ncr (n, r) {
	return permute(n) / (permute(n-r) * permute(r));
}

function compute(numStr) {
	const combo = [];
	const len = numStr.length;
	for (let i = 0; i < len ; i++) {
		for (let j = i ; j < len ; j++) {
			for (k = j; k < len ; k++){
				combo.push(numStr[i]+numStr[j]+numStr[k]);
			}
		}
	}
	return combo;
}



// visit every element of an 1d array 
function maxRecurse(arr, maxVal, len) {
	if (len >= 0) {
		return maxRecurse(arr, maxVal < arr[len] ? arr[len]: maxVal, len-1);
	} else {
		return maxVal;
	}
}
function max(arr) {
	return maxRecurse(arr, arr[0], arr.length - 1);
}

function print(str, n) {
	if (n > str.length)  {
		console.log(str);
	} else {
		for (let i = 0; i < str.length; i++ ) {
			print(str, i);
		}
	}
}