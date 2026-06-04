//Checking Arrays

//Check if something is an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a");
console.log(result1);

//every & some

[80, 90, 95].every(s => s >= 70); //True
[80, 60, 95].every(s => s >= 70); //False

//Playwright API
[200, 201, 203].every(statuscode => statuscode > 200);

//Some - AT LEAST ONE must pass
[80, 60, 85].some(s => s < 70); //true
[80, 90, 85].some(s => s < 70); //False

