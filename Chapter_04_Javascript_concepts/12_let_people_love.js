//let - Blocked scope

let a = 10;
let retryCount = 0;
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

//let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

let testStatus = "Pending";

if (testStatus == "Pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime);
}
console.log(executionTime); //ReferenceError: executionTime is not defined

