function sum(m,n) {
	if (m ==1 || n==1) {
		return 1;
	} else {
		return sum(m - 1, n) + sum(m, n-1);
	}
}