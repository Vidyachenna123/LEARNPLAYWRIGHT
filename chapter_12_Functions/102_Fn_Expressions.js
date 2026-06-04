const greet = function (name) {
    return `Hello, ${name}`;
}

let r = greet("Sree");
console.log(r);

//Type4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}

//Function as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet2("Vidya"));
