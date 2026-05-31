//Iterate - G from one to another

let tests = ["login", "Checkout", "Search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

//for...of (cleanest for values)
for (test of tests) {
    console.log(test);
}

console.log("----");

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----");

let students = ["Methis", "Senthil", "Ajay", "Rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]);
}

console.log("----");


for (let [i, test] of tests.entries()) { }