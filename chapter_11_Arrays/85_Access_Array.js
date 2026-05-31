let statuses = ["Pass", "Fail", "Skip"];
console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-3));
console.log(statuses.at(-4)); //Undefined

statuses[1] = "blocked";
console.log(statuses);