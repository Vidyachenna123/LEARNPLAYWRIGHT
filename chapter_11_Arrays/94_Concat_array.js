let a = [1, 2];
let b = [3, 4];
//let c = a + b;
let c = a.concat(b);
console.log(c);

//spread - concatenation
let d = [...a, ...b];
console.log(d);

//Join
let s = ["Pass", "Fail", "Skip"].join(" | ");
console.log(s);

