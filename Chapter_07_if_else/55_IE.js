let number = 7;
if (number === 7)
    console.log("Number is odd");

let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 80 && marks <= 89) {
    console.log("B");
} else if (marks >= 70 && marks <= 79) {
    console.log("C");
} else if (marks >= 60 && marks <= 69) {
    console.log("D");
}
else {
    console.log("Faile");
}

let year = 2017;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Yes, its leap year");
} else {
    console.log("Not a leap year");
}
