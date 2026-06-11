//searching & string
let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));
console.log(url.includes("Production"));


url.startsWith("https"); //true
url.startsWith("http://"); //false
url.endsWith("true"); //true

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular expression - its a pattern
