var a = 10; //Global Scope



console.log(a);

function printHello() {
    console.log("Hello The testing academy");
    var a = 20; //Local scope
    console.log(a);
    if (true) {
        a = 30;
        console.log(a);
    }

}

printHello();