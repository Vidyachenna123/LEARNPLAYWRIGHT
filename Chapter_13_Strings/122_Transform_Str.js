let str = " Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.trim());

str.trimStart();
str.trimEnd();

let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS"));
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg.replace(/FAIL/g, "PASS"));

//Concatenation
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;

let url = "https://app.vwo.con?app=pramod";
console.log(url.replace(/app/g, "qa"));

let result = "pass,fail,skip".split(",");
console.log(result);

let rr = "test_login_pass".split("_").join(" ");
console.log(rr);

let parts = ["2025", "4", "5"];
let date = parts.join("-");
console.log(date);

