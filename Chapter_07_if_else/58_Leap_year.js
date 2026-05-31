let year = 2017;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " Yes, its leap year");
} else {
    console.log(year + " Not a leap year");
}
