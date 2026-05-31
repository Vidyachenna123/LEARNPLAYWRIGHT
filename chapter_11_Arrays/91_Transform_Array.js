let scores = [34, 89, 57, 75, 80, 23];

//map - transform every element, return a new arrays
//A map will always return the same number of elements that you
//have, but based on the condition, their values will be changed

let grades = scores.map(s => s > 70 ? "Pass" : "Fail");
console.log(grades);

//filter - keeps elements that pass a test 

let passing = scores.filter(s => s > 70);
console.log(passing);


//reduce - accumulates to a single value

let total = scores.reduce((a, b) => a + b, 0);
console.log(total);

//flat - flattens nested array
let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());