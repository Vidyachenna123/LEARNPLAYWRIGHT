function greetTester(name, callback) {
    console.log("Welcome, " + name);
    callback();
}

greetTester("Dev", function () {
    console.log("Lets start testing");

});

//callback with parameters

function runTest(testName, callback) {
    let status = "PASS";
    callback(testName, status);
}

runTest("Login Test", function (name, result) {
    console.log(name + " -> " + result);

});

//Sync callback - forEach
let bugs = ["UI glitch", "API timeout", "Wrong redirect"];

bugs.forEach(function (bug, i) {
    console.log("Bug # " + (i + 1) + ": " + bug);
});

console.log("Total bugs: " + bugs.length);


