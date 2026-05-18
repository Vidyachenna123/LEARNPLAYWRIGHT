var v = 10;
let l = 30;
const c = 3.14;


var browser = "Chrome";
var browser = "firefox"; //redeclaration allowed
browser = "edge"; //reassignment allowed

//for, functions

var testcases = ["login", "logout", "signup"];

for (var i=0; i<testCases.length; i++){
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:",i);
