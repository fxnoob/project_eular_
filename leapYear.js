function leapYear(year) {
	if (year % 400 == 0) 
		return true;
	if (year % 100 == 0)
		return false;
	if (year % 4 == 0)
		return true;
	return false;			
}
function noOfDays(year) {
	if (leapYear(year)) {
		return 366;
	} else {
		return 365;
	}
}

sum = 0;
for (let i = 1901; i < 2001; i++) {
    sum +=  noOfDays(i);
}