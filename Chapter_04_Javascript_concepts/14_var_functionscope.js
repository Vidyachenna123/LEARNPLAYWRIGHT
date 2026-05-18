var a = 10;
console.log(a);
//Definition of the function
function printHello() {
    console.log("Hello");
    var a = 20; //Local Scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log("F ->", a);
}

console.log("F ->", a);
printHello();
